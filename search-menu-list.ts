import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

// Searching for the definition of E which is the navbar menu links array.
// We saw `E.map(e=>` where E is defined. Let's find `E=` closely before the navbar rendering logic.
const navIdx = tail.indexOf('E.map(e=>');
if (navIdx !== -1) {
  console.log('--- SCANNING AROUND E.map ---');
  // Backwards search for `var E=` or `const E=` or `E=`
  const prefix = tail.slice(navIdx - 1000, navIdx);
  console.log(prefix);
  
  // Let's find index of `E=` in the whole file
  let eIdx = navIdx;
  while ((eIdx = tail.lastIndexOf('E=', eIdx - 1)) !== -1) {
    console.log(`\nPossible definition of E= at index ${eIdx} inside tail:`);
    console.log(tail.slice(eIdx - 50, eIdx + 500));
    break; // just show closest
  }
}
