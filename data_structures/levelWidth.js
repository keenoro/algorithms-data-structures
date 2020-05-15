// LEVEL WIDTH
// Given the root node of a tree,
// return an array where each element
// is the width of the tree at each level.

// Example:
//     0      <- Level 0
//   / |  \
// 1   2   3  <- Level 1
// |       |
// 4       5  <- Level 2
// Answer: [1, 3, 2] 

// My solution
function levelWidth(root) {
  const arr = [root, 's'];
  const widths = [0];

  while(arr.length > 1) {
    const node = arr.shift();
    if (node === 's') {
      arr.push('s');
      widths.push(0);
    } else {
      arr.push(...node.children);
      widths[widths.length - 1]++;
    }
  }

  return widths;
}
