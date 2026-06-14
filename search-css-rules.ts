import fs from 'fs';

const css = fs.readFileSync('./styles-source.css', 'utf-8');

// Let's search for interesting class selectors:
const classes = ['.gold-gradient', '.bg-dark', '.text-dim', '.text-main', '.border-primary', '.font-display', '.font-sans', '.font-mono'];

classes.forEach(cls => {
  const idx = css.indexOf(cls);
  if (idx !== -1) {
    console.log(`\nFound class "${cls}" in CSS at position ${idx}:`);
    // Print the CSS rule containing this class selector
    console.log(css.slice(idx, css.indexOf('}', idx) + 1));
  } else {
    console.log(`Class "${cls}" not found in CSS.`);
  }
});

// Let's search for any keyframe animations, since they are usually defined using @keyframes
console.log('\n--- KEYFRAME ANIMATIONS ---');
let keyIdx = 0;
while (true) {
  keyIdx = css.indexOf('@keyframes', keyIdx);
  if (keyIdx === -1) break;
  console.log(css.slice(keyIdx, css.indexOf('}', css.indexOf('{', keyIdx) + 1) + 2));
  keyIdx += 10;
  if (keyIdx > 200000) break;
}
