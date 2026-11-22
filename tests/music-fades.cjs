const fs=require('fs'),assert=require('assert');
for(const name of ['01-micelio','02-luz-de-vidrio','03-jardin-burbujeante']){
 const file=fs.readFileSync('assets/audio/'+name+'.wav');assert.equal(file.toString('ascii',0,4),'RIFF');assert.equal(file.toString('ascii',8,12),'WAVE');let pcm,rate;
 for(let i=12;i+8<=file.length;){const type=file.toString('ascii',i,i+4),n=file.readUInt32LE(i+4);if(type==='fmt '){assert.equal(file.readUInt16LE(i+8),1);assert.equal(file.readUInt16LE(i+10),1);assert.equal(file.readUInt16LE(i+22),16);rate=file.readUInt32LE(i+12)}if(type==='data')pcm=file.subarray(i+8,i+8+n);i+=8+n+(n%2)}
 assert(pcm&&rate===32000);assert.equal(pcm.readInt16LE(0),0);assert.equal(pcm.readInt16LE(pcm.length-2),0);
 const rms=(start,end)=>{let sum=0;for(let i=start;i<end;i++)sum+=(pcm.readInt16LE(i*2)/32768)**2;return Math.sqrt(sum/(end-start))},frames=pcm.length/2,whole=rms(0,frames);
 assert(whole>.1&&whole<.25,'Nivel musical');assert(rms(0,rate/4)<whole*.05,'Entrada suave');assert(rms(frames-rate/4,frames)<whole*.01,'Salida suave');assert(frames/rate>60&&frames/rate<80,'Duracion');
 console.log('OK Fades: '+name+' inicia y termina en silencio, sin corte abrupto');
}
