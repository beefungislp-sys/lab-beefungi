import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import vm from 'node:vm';
const html = await readFile('outputs/BEEFUNGI-MESA-PAJA.html', 'utf8');
const script = html.split('<script>')[1]?.split('</script>')[0];
if (!script) throw new Error('No se encontró el juego para publicar.');
new vm.Script(script);
const version = { sourceSha256: createHash('sha256').update(html).digest('hex'), builtAt: new Date().toISOString() };
for (const folder of ['dist', 'docs']) {
  await mkdir(folder, { recursive: true });
  await writeFile(folder + '/index.html', html, 'utf8');
  await writeFile(folder + '/.nojekyll', '', 'utf8');
  await writeFile(folder + '/version.json', JSON.stringify(version) + '\n', 'utf8');
}
console.log('Sitio preparado en dist y docs.');
