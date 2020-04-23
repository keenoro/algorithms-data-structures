// PALINDROME
// Given a string
// Return true if the string is a palindrome or false if it is not.
// Spaces and punctuation are to be counted in the palidrome.

// Alternative solution #1, using Array.prototype.every()
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  });
}

console.log(palindrome(process.argv[2]));

// // My solution
// function palindrome(str) {
//   // //With If statement
//   // if (str == str.split('').reverse().join('')) {
//   //   return true;
//   // }
//   // return false;

//   // With Ternary operator
//   return str == str.split('').reverse().join('');
// }

// // Possible solution #1
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
 
//   return str === reversed;
// }