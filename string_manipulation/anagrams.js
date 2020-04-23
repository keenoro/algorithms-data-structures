// ANAGRAMS
// Check if two strings are anagrams of eachother

// Alternative solution #1, using sort() method
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagrams(process.argv[2], process.argv[3]))

// // My solution
// function anagrams(stringA, stringB) {

//   //Replace spaces and punctuation with an empty string
//   const newA = stringA.replace(/\W/g,"").toLowerCase();
//   const newB = stringB.replace(/\W/g,"").toLowerCase();

//   let mapA = {};
//   let mapB = {};

//   for (let char of newA) {
//     if (mapA[char]) {
//       mapA[char]++;
//     } else {
//       mapA[char] = 1;
//     }
//   }

//   for (let char of newB) {
//     if (mapB[char]) {
//       mapB[char]++;
//     } else {
//       mapB[char] = 1;
//     }
//   }

//   // Check if the number of keys is different
//   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//     return false;
//   }

//   for(let char of newA) {
//     // Check if char exist in the other string
//     if (mapB[char]) {
//       // Check if both string has the same number of characters
//       if (mapA[char] !== mapB[char]) {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// // Solution #1, using helper functions
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }