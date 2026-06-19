var reverseList = function (head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};
