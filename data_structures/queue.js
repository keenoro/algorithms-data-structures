//QUEUE
//A queue class made with JavaScript array methods
//This hides other methods while allowing it to behave like a queue.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  // My solution
  peek() {
    return this.data[this.data.length - 1];
  }
}

//WEAVE
//Weaves two queues into one queue with alternating content.
//The resulting queue should contain the contents from both queues.
// Eg. Weave([1,2,3],[Hi, Bye]) => [1,Hi,2,Bye,3] 

//This uses the methods from the queue class created above.

// My solution
function weave(sourceOne, sourceTwo) {
  let result = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      result.add(sourceOne.remove());
    }

    if(sourceTwo.peek()) {
      result.add(sourceTwo.remove());
    }
  }

  return result;
}