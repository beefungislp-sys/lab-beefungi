"""Tres arreglos derivados de prueba flauta.mid del autor de Lab BeeFungi.
Render determinista: Python + numpy + wave (biblioteca estándar). Sin muestras externas.
Los rangos originales y decisiones musicales se documentan en la nota de tanda.
"""
from pathlib import Path
import numpy as np
import wave
import struct,json
SR=32000
OUT=Path('assets/audio');PREVIEW=Path('outputs/audio')
# Pitches tomados de tres zonas distintas del MIDI; tiempos recompuestos a 4/4.
THEMES=[
 dict(id='01-micelio',name='Micelio',bpm=78,origin=[13.86,41.69],melody=[(74,2),(72,2),(74,1),(71,3),(74,2),(72,2),(60,2),(64,2),(74,1),(72,3),(62,2),(64,2),(67,2),(65,2),(64,2),(62,2)],chords=[[50,57,60,64],[43,55,59,62],[48,55,60,64],[45,52,57,60],[50,57,60,64],[41,53,57,60],[43,55,59,62],[48,55,60,64]]),
 dict(id='02-luz-de-vidrio',name='Luz de vidrio',bpm=86,origin=[49.94,74.34],melody=[(77,1),(79,1),(77,2),(76,2),(74,2),(76,4),(77,4),(79,4),(65,2),(62,2),(76,2),(74,2),(77,2),(76,1),(72,1)],chords=[[41,53,57,60],[48,55,60,64],[50,57,60,65],[45,52,57,60],[41,53,57,60],[48,55,60,64],[43,55,59,62],[48,55,60,64]]),
 dict(id='03-jardin-burbujeante',name='Jardín burbujeante',bpm=92,origin=[222.25,241.36],melody=[(74,1),(76,1),(72,1),(71,1),(74,2),(76,1),(74,1),(72,1),(71,1),(69,2),(74,2),(76,1),(77,1),(79,2),(77,2),(76,2),(74,2),(72,2),(71,2),(69,2),(72,2)],chords=[[45,52,57,60],[41,53,57,60],[48,55,60,64],[43,55,59,62],[50,57,60,64],[41,53,57,60],[43,55,59,62],[48,55,60,64]])]

def varlen(n):
 b=[n&127];n>>=7
 while n:b.insert(0,(n&127)|128);n>>=7
 return bytes(b)
def midi(path,events,bpm):
 data=b'\0\xff\x51\x03'+int(60e6/bpm).to_bytes(3,'big')+b'\0\xff\x58\x04\x04\x02\x18\x08';all_events=[]
 programs=[73,88,10,33]
 for ch,p in enumerate(programs):data+=b'\0'+bytes([0xc0|ch,p])
 for beat,dur,pitch,amp,kind,pan in events:
  ch={'flute':0,'pad':1,'bell':2,'bass':3}[kind];vel=max(20,min(100,round(amp*220)))
  all_events += [(round(beat*480),1,bytes([0x90|ch,pitch,vel])),(round((beat+dur)*480),0,bytes([0x80|ch,pitch,0]))]
 last=0
 for tick,_,msg in sorted(all_events):data+=varlen(tick-last)+msg;last=tick
 data+=b'\0\xff\x2f\0';path.write_bytes(b'MThd'+struct.pack('>IHHH',6,0,1,480)+b'MTrk'+struct.pack('>I',len(data))+data)

def write_wav(path,audio):
 with wave.open(str(path),'wb') as f:
  f.setnchannels(1);f.setsampwidth(2);f.setframerate(SR);f.writeframes((np.clip(audio,-1,1)*32767).astype('<i2').tobytes())

def fade_track(audio, fade_in=2.0, fade_out=4.0):
 # Curva coseno: nivel y pendiente suaves al llegar a silencio/volumen completo.
 result=audio.copy()
 start=min(len(result),round(fade_in*SR));end=min(len(result),round(fade_out*SR))
 result[:start]*=(.5-.5*np.cos(np.linspace(0,np.pi,start)))[:,None]
 result[-end:]*=(.5+.5*np.cos(np.linspace(0,np.pi,end)))[:,None]
 return result

def render(theme):
 assert sum(d for _,d in theme['melody'])==32
 spb=60/theme['bpm'];length=96*spb;N=round(length*SR);audio=np.zeros((N,2),np.float64);events=[];rng=np.random.default_rng(20261120)
 def add(beat,dur,pitch,amp,kind,pan=0):
  events.append((beat,dur,pitch,amp,kind,pan));seconds=dur*spb;release={'flute':.2,'pad':.7,'bell':.9,'bass':.15}[kind];t=np.arange(round((seconds+release)*SR))/SR;f=440*2**((pitch-69)/12)
  attack={'flute':.075,'pad':.32,'bell':.008,'bass':.025}[kind];env=np.minimum(t/attack,1)*np.exp(-np.maximum(t-seconds,0)/(release/5))
  if kind=='flute':
   phase=2*np.pi*f*t+.012*f/440*np.sin(2*np.pi*4.6*t)*np.minimum(t/.5,1);sig=np.sin(phase)+.13*np.sin(2*phase)+.035*np.sin(3*phase);noise=rng.normal(0,1,len(t));noise=np.convolve(noise,np.ones(15)/15,'same');sig+=.045*noise;env*=.85+.15*np.exp(-t*2)
  elif kind=='pad':sig=np.sin(2*np.pi*f*t)+.12*np.sin(2*np.pi*f*2*t);env*=.64+.1*np.sin(t*1.7)
  elif kind=='bell':sig=(np.sin(2*np.pi*f*t)+.18*np.sin(2*np.pi*f*2*t))*np.exp(-t*3.5)
  else:sig=np.sin(2*np.pi*f*t)+.1*np.sin(2*np.pi*f*2*t);env*=np.exp(-t*.55)
  sig*=env*amp;start=round(beat*spb*SR);idx=(np.arange(len(t))+start)%N;g=[np.sqrt((1-pan)/2),np.sqrt((1+pan)/2)]
  for ch in range(2):np.add.at(audio[:,ch],idx,sig*g[ch])
 # A / A' / B: 24 compases. Frases originales preservadas, respiraciones al final.
 for section in range(3):
  beat=section*32
  for i,(p,d) in enumerate(theme['melody']):
   # Unificar el registro conserva las notas y evita saltos de dos octavas.
   if p < 69: p += 12
   octave=-12 if section==2 and p>=72 else 0
   add(beat,d*.82,p+octave,.105 if section!=1 else .115,'flute',-.12)
   if section==1 and d>=2 and i%3==0:add(beat+d-.5,.32,p-12,.035,'bell',.32)
   beat+=d
  for bar,chord in enumerate(theme['chords']):
   b=section*32+bar*4
   add(b,3.7,chord[0],.085,'bass',0)
   for j,p in enumerate(chord[1:]):add(b,3.8,p,.029,'pad',[-.55,.1,.55][j])
   for k in range(4):
    p=chord[1+(k+section)%3]+12
    add(b+k+.5,.24,p,.027 if section!=2 else .02,'bell',(-1)**k*.42)
 # Reverberación circular suave: la cola vuelve al inicio y permite repetición continua.
 dry=audio.copy()
 for delay,gain in [(.113,.1),(.239,.075),(.379,.055),(.563,.035)]:audio+=np.roll(dry,round(delay*SR),axis=0)[:,::-1]*gain
 peak=float(np.max(np.abs(audio)));audio*=.58/max(peak,1e-9);audio=audio.astype(np.float32)
 # Las canciones se escuchan completas con fades; el reproductor deja la pausa.
 audio=fade_track(audio)
 write_wav(OUT/(theme['id']+'.wav'),audio.mean(axis=1))
 write_wav(PREVIEW/(theme['id']+'.wav'),audio.mean(axis=1));midi(PREVIEW/(theme['id']+'.mid'),events,theme['bpm'])
 return dict(id=theme['id'],name=theme['name'],bpm=theme['bpm'],bars=24,seconds=round(length,3),sourceBeats=theme['origin'],sourceSeconds=[round(x*60/110,2) for x in theme['origin']],peak=float(np.max(np.abs(audio))),rms=float(np.sqrt(np.mean(audio**2))),events=len(events),fadeInSeconds=2,fadeOutSeconds=4)
if __name__=='__main__':
 OUT.mkdir(parents=True,exist_ok=True);PREVIEW.mkdir(parents=True,exist_ok=True)
 report=[render(t) for t in THEMES];(PREVIEW/'analisis.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf8');print(json.dumps(report,ensure_ascii=False,indent=2))

