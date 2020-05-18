// VALIDATE
// Given a node, validate the binary search tree,
// making sure that the left child node is less than the parent
// and the right child node is greater than the parent.

// Solution 1, recursion
function validate(node, min = null, max = null) {
  if(max !== null && node.data > max) {
    return false;
  }

  if(min !== null && node.data < min) {
    return false;
  }

  if(node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if(node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}