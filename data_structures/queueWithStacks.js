//QUEUE WITH STACKS
//A common question to implement a queue data strucuture with two stacks.

const Stack = require('./stack');

//My solution
class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  add(record) {
    if (!this.stackOne.peek()) {
      this.stackOne.push(record);
    } else {
      while (this.stackOne.peek()) {
        this.stackTwo.push(this.stackOne.pop());
      }

      this.stackOne.push(record);

      while (this.stackTwo.peek()) {
        this.stackOne.push(this.stackTwo.pop());
      }
    }
  }

  remove() {
    return this.stackOne.pop();
  }

  peek() {
    return this.stackOne.peek();
  }
}


// //Solution #1, running while loops in remove() and peek()
// class Queue {
//   constructor() {
//     this.first = new Stack();
//     this.second = new Stack();
//   }

//   add(record) {
//     this.first.push(record);
//   }

//   remove() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }

//     const record = this.second.pop();

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }

//     return record;
//   }

//   peek() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }

//     const record = this.second.peek();

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }

//     return record;
//   }
// }