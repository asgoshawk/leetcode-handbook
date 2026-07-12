function removeElements(head, val) {
  const dummy = { next: head };
  let node = dummy;
  while (node.next) {
    if (node.next.val === val) node.next = node.next.next;
    else node = node.next;
  }
  return dummy.next;
}
