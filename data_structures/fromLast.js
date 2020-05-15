// FROMLAST (Linked List)
// Given a linked list, return the n-th element
// from the last node in the linked list.  
// Do not call the 'size' method of the linked list
// Assume that n will always be less than the length of the list.

// My solution
function fromLast(list, n) {
  let slow = list.head; // list.getFirst()
  let fast = list.head; // list.getFirst()

  for(let i = 0; i < n; i++) { // While loop possible as well
    fast = fast.next;
  }

  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
