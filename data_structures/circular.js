// CIRCULAR (Linked List)
// Check if a linked list has a cycle
// Return true if the list contains a cycle, false if it does not

function circular(list) {
  let slow = list.getFirst(); // or list.head
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    // Check if the node reference is identical
    if (slow === fast) {
      return true;
    }
  }
  return false;
}