// REVERSE INT
// Given an integer, return an integer that is the reverse ordering of numbers.
// Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution #1
function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(parseInt(process.argv[2])));

// // My Solution
// function reverseInt(n) {
//   if (n === 0) {
//     return n;
//   }

//   let intArray = n.toString().split('');

//   let reversed = intArray.reduce((rev, digit) => { 
//     if (digit !== '0' && digit !== '-') {
//       return digit + rev
//     }
//     return rev;
//   }, '')

//   if (n < 0) {
//     return parseInt(`-${reversed}`);
//   }
//   return parseInt(reversed);
// }