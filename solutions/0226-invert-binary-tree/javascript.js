function invertTree(root) {
  if (root === null) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}
