import { readFile, mkdir, writeFile, cp } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import vm from 'node:vm';
const html = await readFile('outputs/BEEFUNGI-MESA-PAJA.html', 'utf8');
const script = html.split('<script>')[1]?.split('</script>')[0];
if (!script) throw new Error('No se encontró el juego para publicar.');
if (/window\.__BEEFUNGI_(?:DEV_TOOLS|FIXTURE)__\s*=\s*true\b/.test(html))
  throw new Error('El build público no admite activaciones de prueba en la fuente.');
new vm.Script(script);
const pkg = JSON.parse(await readFile('package.json', 'utf8'));
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const audioFiles = ['01-micelio.wav', '02-luz-de-vidrio.wav', '03-jardin-burbujeante.wav'];
const audioSha256 = Object.fromEntries(await Promise.all(audioFiles.map(async name =>
  [name, hash(await readFile('assets/audio/' + name))]
)));
const version = { version: pkg.version, channel: 'public', sourceSha256: hash(html), audioSha256, builtAt: new Date().toISOString() };
for (const folder of ['dist', 'docs']) {
  await mkdir(folder, { recursive: true });
  await cp('assets/audio', folder + '/assets/audio', { recursive: true });
  await writeFile(folder + '/index.html', html, 'utf8');
  await writeFile(folder + '/.nojekyll', '', 'utf8');
  await writeFile(folder + '/version.json', JSON.stringify(version) + '\n', 'utf8');
}
console.log('Versión pública ' + pkg.version + ' preparada en dist y docs.');
