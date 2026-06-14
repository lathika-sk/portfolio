import fs from 'fs';

const rou = fs.readFileSync('./routes-source.js', 'utf-8');

console.log('File size:', rou.length);

// Let's grab segments of the file and look for key array definitions like `qd=`, `Gd=`, `Kd=`, etc.
// We'll write them to files or log them.
// Let's search inside the last 85KB of the file.

const startIdx = Math.max(0, rou.length - 85000);
const tail = rou.slice(startIdx);

fs.writeFileSync('./routes-data-tail.js', tail);
console.log('Saved the last 85KB to ./routes-data-tail.js');

// Let's write a script to grep specifically inside this tail for:
// projects, certifications, etc.
// Let's find specific arrays. We know certifications is `qd=[{id:1...`
// Let's write a script that extracts `qd` fully.

const qdStart = rou.indexOf('qd=[{');
const qdEnd = rou.indexOf(']', qdStart); // wait, qd reaches far. Let's find the closing of `qd=[...]` by matching brackets.

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

if (qdStart !== -1) {
  const bracketContent = getMatchingBracketContent(rou, qdStart + 3);
  if (bracketContent) {
    fs.writeFileSync('./certifications.json', `[${bracketContent}`);
    console.log('Saved COMPLETE certifications list to ./certifications.json. Length:', bracketContent.length);
  }
}

// Let's search for the projects array. We know it ends with `Smartphone`,github:`https://github.com/lathika-sk`}]`
// Let's find the array that ends with `Smartphone`,github:`https://github.com/lathika-sk`}]`

const searchStr = 'Smartphone`,github:`https://github.com/lathika-sk`';
const pEndIndex = rou.indexOf(searchStr);
if (pEndIndex !== -1) {
  // Let's search backwards to find the start of the array `[`
  let depth = 0;
  let pStartIndex = -1;
  for (let i = pEndIndex + searchStr.length; i >= 0; i--) {
    const char = rou[i];
    if (char === ']') {
      depth++;
    } else if (char === '[') {
      depth--;
      if (depth === 0) {
        pStartIndex = i;
        break;
      }
    }
  }
  
  if (pStartIndex !== -1) {
    const pContent = rou.slice(pStartIndex, pEndIndex + searchStr.length + 2); // gets the whole array [...]
    fs.writeFileSync('./projects.json', pContent);
    console.log('Saved COMPLETE projects list to ./projects.json. Length:', pContent.length);
    
    // Check what is right before it, to get the projects array identifier!
    console.log('Variable prefix before projects:', rou.slice(pStartIndex - 20, pStartIndex));
  }
}

// Let's see some other parts around certificates or skills list
// Let's search for skills. e.g. "React", "Node", "Python", "Machine Learning"
const skillIndex = rou.indexOf('Machine Learning');
if (skillIndex !== -1) {
  console.log('Found Machine Learning at:', skillIndex);
  console.log('Skills array context:', rou.slice(skillIndex - 1000, skillIndex + 1000));
}
