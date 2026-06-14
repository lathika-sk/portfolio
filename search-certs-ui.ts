import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

// Search for her certifications rendering loop, usually it loops over `qd.length` or `y.map`
const certsIdx = tail.indexOf('Continuous Learning');
if (certsIdx !== -1) {
  console.log('--- CERTIFICATIONS RENDERING DETAILS ---');
  // From certsIdx print the next 1500 characters
  console.log(tail.slice(certsIdx, certsIdx + 1500));
} else {
  console.log('Certs title pattern not found.');
}
