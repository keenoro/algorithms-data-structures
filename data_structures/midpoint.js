// MIDPOINT
// Return the middle node of a linked list
// If the list has an even number of elements, return the node
// at the end of the first half of the list
// Do not use counter variable or the size of the list
// Iterate through the list once only

// Solution 1, using slow and fast pointers
function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// // My solution
// function midpoint(list) {
//   let slow = list.head;
//   let fast = list.head;

//   while(fast) {
//     if (!fast.next || !fast.next.next) {
//       // The next 2 elements is null
//       return slow;
//     }
//     slow = slow.next;
//     fast = fast.next.next;
//   }
// }