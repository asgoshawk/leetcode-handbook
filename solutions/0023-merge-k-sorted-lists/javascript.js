var mergeKLists = function (lists) {
  const merge = (a, b) => {
    const dummy = { val: 0, next: null };
    let tail = dummy;
    while (a && b) {
      if (a.val <= b.val) [tail.next, a] = [a, a.next];
      else [tail.next, b] = [b, b.next];
      tail = tail.next;
    }
    tail.next = a ?? b;
    return dummy.next;
  };
  while (lists.length > 1) {
    const next = [];
    for (let i = 0; i < lists.length; i += 2) next.push(merge(lists[i], lists[i + 1] ?? null));
    lists = next;
  }
  return lists[0] ?? null;
};
