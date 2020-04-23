// MAXCHAR
// Given a string, return the letter that appears the most in the string.

// Solution #1
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar(process.argv[2]));

// // My solution
// function maxChar(str) {
//   const chars = {}

//   for (let char of str) {
//     if (!chars[char]) {
//       chars[char] = 1
//     } else {
//       chars[char]++
//     }
//   }

//   let maxChar = '';
//   let highest = 0;

//   for (let char of str) {
//     if (chars[char] > highest) {
//       maxChar = char;
//       highest = chars[char];
//     }
//   }

//   return maxChar;
// }