import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

const sIdx = tail.indexOf('frontend:');
if (sIdx !== -1) {
  console.log('--- SKILLS DEF ---');
  // Print some characters before and after to fetch the variable declaration
  console.log(tail.slice(sIdx - 150, sIdx + 500));
}
