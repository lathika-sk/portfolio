import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

const keyIdx = tail.indexOf('lathika-portfolio.mp4');
if (keyIdx !== -1) {
  console.log('--- SCANNING AROUND VIDEO URL ---');
  console.log(tail.slice(keyIdx - 500, keyIdx + 1000));
}
