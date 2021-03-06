// STEPS
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side.
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #2, recursion
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  //Ternary operator
  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

steps(parseInt(process.argv[2]));

// // My solution, using repeat() string method
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log('#'.repeat(i) + ' '.repeat(n - i))
//   }
// }

// // Solution #1, iterative and 2 for loops
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }