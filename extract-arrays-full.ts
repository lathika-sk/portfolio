import fs from 'fs';

const rou = fs.readFileSync('./routes-source.js', 'utf-8');

// We want to extract whole arrays or segments. Let's write a script that searches for:
// `qd=[{` (certifications array start) and gets everything until the next top-level structural declaration closing.
// Same for projects array. What is the name of the projects array?
// In the search output we saw:
// `... github.com/lathika-sk`},{title:`Intel Buddy – AI Student Assistant`, ... tech: ... }...`
// This fits into a projects array, let's find the variable name for that array.
// It ends with: `Smartphone`,github:`https://github.com/lathika-sk`}],Wd=[{title:...`
// So it ends with `Smartphone`,github:`https://github.com/lathika-sk`}]` followed by `,Wd=[` or `var Wd=[`.
// Let's find what is right before `Wd=[{`.

const wdIndex = rou.indexOf('Wd=[{');
if (wdIndex !== -1) {
  // Let's print the 6000 characters before `Wd=[{` to see the complete projects array and its variable name!
  console.log('--- BEFORE Wd=[{ (PROJECTS ARRAY) ---');
  console.log(rou.slice(wdIndex - 4000, wdIndex + 20));
}

// Let's print the characters after `qd=[{` to find the entire certifications array:
const qdIndex = rou.indexOf('qd=[{');
if (qdIndex !== -1) {
  console.log('\n--- AFTER qd=[{ (CERTIFICATIONS ARRAY) ---');
  console.log(rou.slice(qdIndex, qdIndex + 14000));
}
