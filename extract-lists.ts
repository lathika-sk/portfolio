import fs from 'fs';

const rou = fs.readFileSync('./routes-source.js', 'utf-8');

// Let's print sections in routes-source.js where there are arrays or lists.
// For example, finding `qd =` or `qd=[{`
// Let's look for definitions of things like `qd=`, `Gd=`, `Kd=`, or other array variables.

console.log('--- FINDING ARRAY DEFINITIONS ---');

// Let's run a regex to search for patterns of the form `const SomeVar = [` or `SomeVar = [`
// We can scan lines or search for variables near our search terms.
const words = ['Sasurie', 'Tiruppur', '8637607494', 'Fine Arts Club', 'Tamil', 'cgpa', 'degree'];
words.forEach(word => {
  let idx = 0;
  while ((idx = rou.indexOf(word, idx)) !== -1) {
    console.log(`\nFound "${word}" at ${idx}`);
    // print some lines of code before and after
    console.log(rou.slice(idx - 1500, idx + 1500));
    idx += word.length;
    break; // just show first match for each word to avoid spam
  }
});
