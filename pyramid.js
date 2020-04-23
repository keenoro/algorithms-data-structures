// PYRAMID
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution #2, recursive solution
function pyramid(n, row = 0, level = '') {
  // Base case
  if (row === n) {
    return;
  }

  // Do for next row
  if ((2 * n - 1) === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2)
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

pyramid(parseInt(process.argv[2]));

// // My solution
// function pyramid(n) {
//   const collength = n + (n - 1);
//   const mid = Math.floor(collength/2);

//   for (let row = 0; row < n; row++) {
//     let layer = '';

//     for (let col = 0; col < collength; col++) {
//       if (col >= (mid - row) && col <= (mid + row)) {
//         layer+= '#';
//       } else {
//         layer+= ' ';
//       }
//     }

//     console.log(layer);
//   }
// }


// // Solution #1, iterative solution
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2 );

//   for (let row = 0; row < n; row++ ) {
//     let level = '';

//     for (let column = 0; column < 2 * n - 1 ; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }