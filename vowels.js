// VOWELS
// Return the number of vowels

//Solution #2, regex expression
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(vowels(process.argv[2]));

// // My solution
// function vowels(str) {
//   const alphabet = str.toLowerCase().split('');

//   const result = alphabet.filter(letter => letter.match(/a|e|i|o|u/g));

//   return result.length;
// }

// //Solution #1, iterative solution
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }
