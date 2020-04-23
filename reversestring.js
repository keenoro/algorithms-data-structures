// REVERSE STRING
// Given a string, return a new reversed string

// Possible solution #3, using reduce helper function
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

console.log(reverse(process.argv[2]))

// My Solution
// function reverse(str) {
//   let currentStrList = [ ...str ]
//   let reversedStrList = []

//   for (let i = currentStrList.length; i >= 0; i--) {
//     reversedStrList.push(currentStrList[i])
//   }

//   let newStr = reversedStrList.join('');

//   return newStr
// }

// // Possible solution #1, relies on JavaScript Array knowledge
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// // Possible solution #2, using a For Loop
// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }