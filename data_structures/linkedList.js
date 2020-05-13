// LINKED LIST
// Implemented Node and Linked Lists

class Node {
  // To store data and the reference of the next node
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  // Reference to the first node
  constructor() {
    this.head = null;
  }

  // Insert a node at the beginning of a linked list
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  // Return the number of nodes in a linked list
  size() {
    let size = 0;
    let node = this.head;

    while (node) {
      size++;
      node = node.next;
    }

    return size;
  }

  // Return the first node in a linked list
  getFirst() {
    return this.head;
  }

  // Return the last node in a linked list
  // Check if head is null
  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while(node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  // Empties the linked list of any nodes
  clear() {
    this.head = null;
  }

  // Remove the first node in a linked list (Head)
  // Check if linked list is empty
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;

    // // My solution
    // if (this.head) {
    //   this.head = this.head.next;
    // }
    // return;
  }

  // Remove the last node in a linked list (Tail)
  // Check if linked list is empty
  removeLast() {
    // Check if linked list is empty
    if (!this.head) {
      return;
    }

    // Check if linked list has only one item
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous =  this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  // Insert a new node with data at the end of the linked list
  // Check if linked list is empty
  insertLast(data) {
    const lastNode = this.getLast();
    if (lastNode) {
      // There are nodes in the linked list
      lastNode.next = new Node(data);
    } else {
      // The linked list is empty
      this.head = new Node(data);
    }
  }

  // Return the node at a given index of the linked list
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  // Remove the node at a given index of the linked list
  removeAt(index) {
    if(!this.head) {
      return;
    }

    if(index === 0) {
      // First node
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      // Index out of bounds
      return;
    }
    previous.next = previous.next.next;
  }

  // Insert a new node at the given index
  // If index is out of bounds, add it to the end of the linked list
  insertAt(data, index) {
    if (!this.head) {
      // Linked list is empty
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      // Insert at 0 with elements in the linked list
      this.head = new Node(data, this.head);
      return;
    }

    // If it's out of bounds, get the last element
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;

    // // My solution
    // const previous = this.getAt(index - 1);
    // if (!previous) {
    //   // Out of bounds, insert node at the end
    //   this.insertLast(data);
    //   return;
    // }
    // previous.next = new Node(data, previous.next);
  }

  // Calls the provided function with every node in the linked list
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // Using generator to make it work with a for...of Loop
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}