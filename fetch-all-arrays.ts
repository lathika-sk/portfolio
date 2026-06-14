import fs from 'fs';

const rou = fs.readFileSync('./routes-source.js', 'utf-8');

function getMatchingBracketContent(str: string, startIndex: number) {
  let depth = 0;
  let inString: string | null = null;
  let isEscaped = false;
  
  for (let i = startIndex; i < str.length; i++) {
    const char = str[i];
    
    if (isEscaped) {
      isEscaped = false;
      continue;
    }
    if (char === '\\') {
      isEscaped = true;
      continue;
    }
    
    if (inString !== null) {
      if (char === inString) {
        inString = null;
      }
      continue;
    }
    
    if (char === '"' || char === "'" || char === '`') {
      inString = char;
      continue;
    }
    
    if (char === '[') {
      depth++;
    } else if (char === ']') {
      depth--;
      if (depth === 0) {
        return str.slice(startIndex, i + 1);
      }
    }
  }
  return null;
}

const arraysToExtract = {
  certifications: 'qd=[{',
  projects: 'Ud=[{',
  education: 'Gd=[{',
  experience: 'Wd=[{',
  achievements: 'Kd=[{'
};

for (const [name, pattern] of Object.entries(arraysToExtract)) {
  const index = rou.indexOf(pattern);
  if (index !== -1) {
    const bracketContent = getMatchingBracketContent(rou, index + pattern.indexOf('['));
    if (bracketContent) {
      fs.writeFileSync(`./${name}.json`, bracketContent);
      console.log(`Saved ${name}.json. Length: ${bracketContent.length}`);
    } else {
      console.log(`Failed to match brackets for ${name}`);
    }
  } else {
    console.log(`Pattern not found for ${name}`);
  }
}

// Let's find other arrays or strings related to SKILLS
// Let's search for words like "Frontend", "Backend", "AI &", "Frameworks" inside routes-source.js
console.log('\n--- Searching for skills or categories around index 120000 - 160000 ---');
// Let's print out the variable names declaration around Ud or Kd
const indexUd = rou.indexOf('Ud=[{');
if (indexUd !== -1) {
  console.log('Context around projects array Ud:');
  console.log(rou.slice(indexUd - 1000, indexUd));
}
