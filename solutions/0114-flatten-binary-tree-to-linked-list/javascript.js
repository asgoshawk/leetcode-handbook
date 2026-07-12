function flatten(root) {
  let node = root;
  while (node) {
    if (node.left) {
      let tail = node.left;
      while (tail.right) tail = tail.right;
      tail.right = node.right;
      node.right = node.left;
      node.left = null;
    }
    node = node.right;
  }
}
