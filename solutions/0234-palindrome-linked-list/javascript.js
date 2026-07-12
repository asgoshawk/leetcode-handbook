function isPalindrome(head) {
  const values = [];
  for (let node = head; node; node = node.next) values.push(node.val);
  for (let l = 0, r = values.length - 1; l < r; l++, r--) {
    if (values[l] !== values[r]) return false;
  }
  return true;
}
