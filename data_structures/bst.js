// Binary Search Tree
// Insert - Insert a node
// Contains - Return a node if it exist, return null if it does not

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // Solution 1, recursion
  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  //Solution 1, recursion
  contains(data) {
    if (this.data === data) {
      return this;
    }
    
    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}