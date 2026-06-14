import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

const sIdx = tail.indexOf('function Sp({onDone:e})');
if (sIdx !== -1) {
  // Let's print 1800 characters from sIdx to see the entire component return
  console.log('--- FULL Sp COMPONENT ---');
  console.log(tail.slice(sIdx, sIdx + 1800));
}
