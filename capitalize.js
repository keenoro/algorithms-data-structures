// CAPITALIZE
// Capitalize the first letter of each word in a sentence

// // My solution
// function capitalize(str) {
//   const strArray = str.split(' ');
//   let capitalized = [];

//   for (let word of strArray) {
//     capitalized.push(word[0].toUpperCase() + word.slice(1))
//   }

//   return capitalized.join(' ');
// }

// Alternative solution
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    //If the character on the left is a space, capitalized current letter
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i]
    }
  }

  return result;
}

console.log(capitalize(process.argv[2]));

// // Solution #1
// function capitalize(str) {
//   const words = []

//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }