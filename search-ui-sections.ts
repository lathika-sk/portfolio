import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

// Let's find common React UI elements in her portfolio component (which is likely the main export).
// We know she has section IDs like: id="about", id="projects", id="education", id="certifications", id="contact"
// Let's search for these IDs.

const ids = ['about', 'projects', 'education', 'certifications', 'contact', 'achievements', 'skills'];
console.log('--- SCANNING FOR SECTION IDS ---');
ids.forEach(id => {
  const matchIdx = tail.indexOf(`id:\`${id}\``);
  const matchIdx2 = tail.indexOf(`id:"${id}"`);
  const matchIdx3 = tail.indexOf(`id:'${id}'`);
  const finalIdx = matchIdx !== -1 ? matchIdx : (matchIdx2 !== -1 ? matchIdx2 : matchIdx3);
  if (finalIdx !== -1) {
    console.log(`\nFound section ID "${id}" at offset ${finalIdx}:`);
    console.log(tail.slice(Math.max(0, finalIdx - 200), Math.min(tail.length, finalIdx + 500)));
  } else {
    console.log(`Section ID "${id}" NOT found as literal.`);
  }
});

// Let's look at modal or state trigger around r(!0). We saw r(!0) in:
// `button`,{onClick:()=>r(!0),className:`px-7 py-4 border...`
// Let's print around that click handler to see what `r` controls.
const rIdx = tail.indexOf('r(!0)');
if (rIdx !== -1) {
  console.log('\n--- CONTEXT AROUND r(!0) ---');
  console.log(tail.slice(rIdx - 500, rIdx + 500));
}
