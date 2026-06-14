import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

// The metrics are defined at the end of child 1. Let's find index where metrics are closing.
// We saw: "grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-primary/10 pt-8"
const metricsIdx = tail.indexOf('grid grid-cols-2 md:grid-cols-4 gap-8');
if (metricsIdx !== -1) {
  console.log('--- SCANNING AFTER HERO METRICS ---');
  // Print the next 2000 characters to see what is rendered next as child 2
  console.log(tail.slice(metricsIdx, metricsIdx + 2000));
} else {
  console.log('Metrics grid not found.');
}
