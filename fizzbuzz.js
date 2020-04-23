// FIZZBUZZ
// From 1 to n.
// Print "fizz" for numbers that are multiples of three
// Print "buzz" for numbers that are multiples of five
// Print "fizzbuzz" for numbers that are both multiples of three and five

// Solution #1, modulo %
// Use this code below, don't make anything fancy
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('fizz');
    } else if (i % 5 === 0) {
      // Is the number a multiple of 5?
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(process.argv[2]);

// // My solution
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz")
//     } else if (i % 5 === 0) { 
//       console.log("buzz")
//     } else {
//       console.log(i)
//     }
//   }
// }