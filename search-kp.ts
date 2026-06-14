import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

const sIdx = tail.indexOf('function kp({');
if (sIdx !== -1) {
  console.log('--- CERTIFICATE LIGHTBOX COMPONENT kp ---');
  console.log(tail.slice(sIdx, sIdx + 2000));
} else {
  console.log('kp definition not found.');
}
