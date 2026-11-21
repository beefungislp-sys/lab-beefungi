import { readFile, mkdir, writeFile } from 'node:fs/promises';
import vm from 'node:vm';
const html=await readFile('outputs/BEEFUNGI-MESA-PAJA.html','utf8');
const begin=html.indexOf('function organicCueSamples('),end=html.indexOf('function playOrganicCue(',begin);
if(begin<0||end<0)throw Error('Dibujante de audio ausente');
const fn=vm.runInNewContext('('+html.slice(begin,end).trim()+')');
await mkdir('outputs/audio',{recursive:true});
for(const [kind,name] of [['harvest','cosecha-madera'],['compost','composta-tierra']]){
 const rate=44100,data=fn(kind,rate),wav=Buffer.alloc(44+data.length*2);
 wav.write('RIFF',0);wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);wav.writeUInt32LE(rate,24);wav.writeUInt32LE(rate*2,28);wav.writeUInt16LE(2,32);wav.writeUInt16LE(16,34);wav.write('data',36);wav.writeUInt32LE(data.length*2,40);
 for(let i=0;i<data.length;i++)wav.writeInt16LE(Math.round(Math.max(-1,Math.min(1,data[i]))*32767),44+i*2);
 await writeFile('outputs/audio/'+name+'.wav',wav);console.log(name+': '+(data.length/rate).toFixed(2)+' s');
}
