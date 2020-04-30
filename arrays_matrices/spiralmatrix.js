// SPIRAL MATRIX
// Accepts a positive N integer
// Return an n*n spiral matrix
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//My solution
function matrix(n) {
  let spiralMatrix = [];

  for (let i = 0; i < n; i++) {
    spiralMatrix.push([]);
  }

  let counter = 1;

  let startCol = 0
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // First row
    for (let col = startCol; col <= endCol; col++) {
      spiralMatrix[startRow][col] = counter;
      counter++;
    }

    startRow++;

    //End column
    for (let row = startRow; row <= endRow; row++) {
      spiralMatrix[row][endCol] = counter;
      counter++;
    }

    endCol--;

    //End row
    for (let col = endCol; col >= startCol; col--) {
      spiralMatrix[endRow][col] = counter;
      counter++;
    }

    endRow--;

    //First column
    for (let row = endRow; row >= startRow; row--) {
      spiralMatrix[row][startCol] = counter;
      counter++;
    }

    startCol++;
  }

  return spiralMatrix;
}

console.log(matrix(process.argv[2]));