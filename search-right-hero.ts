import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

const rIdx = tail.indexOf('r-[120px]');
if (rIdx !== -1) {
  console.log('--- RIGHT CELL OF HERO ---');
  console.log(tail.slice(rIdx - 500, rIdx + 500));
} else {
  console.log('r-[120px] not found.');
}
