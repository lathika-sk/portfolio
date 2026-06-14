import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

// Searching for the definition of Sp component.
// We know from the navbar search that it is named Sp -> `children:[n&&(0,q.jsx)(Sp,{onDone:`
// Let's find index of "Sp=" or "function Sp" or look for where Sp is declared.

const idx = tail.indexOf('Sp=');
if (idx !== -1) {
  console.log('--- FOUND Sp= COMPONENT DEFINITION ---');
  console.log(tail.slice(idx - 100, idx + 2000));
} else {
  console.log('Sp= definition not found as simple assignment.');
  // Let's look for "onDone" inside the file to trace Sp
  let refIdx = 0;
  while ((refIdx = tail.indexOf('onDone', refIdx)) !== -1) {
    console.log(`onDone found at ${refIdx}:`);
    console.log(tail.slice(refIdx - 300, refIdx + 300));
    refIdx += 6;
  }
}
