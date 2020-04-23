// CHUNK
// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

// // My solution
// function chunk(array, size) {
//   let chunkArray = [];

//   while (array.length !== 0) {
//     let subArray = [];

//     for (let i = 0; i < size; i++) {
//       if (array.length !== 0) {
//         subArray.push(array.shift());
//       } else {
//         break;
//       }
//     }

//     chunkArray.push(subArray);
//   }

//   return chunkArray;
// }

// Solution #2, using slice function. slice(start index, end index but excluding the last index)
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

// Change these parameters
console.log(chunk([1,2,3,4,5], 2))

// // Solution #1, using last element
// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }