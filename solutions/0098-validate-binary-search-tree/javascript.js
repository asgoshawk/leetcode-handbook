var isValidBST = function (root) {
  const valid = (node, lower, upper) => {
    if (!node) return true;
    if (node.val <= lower || node.val >= upper) return false;
    return valid(node.left, lower, node.val) && valid(node.right, node.val, upper);
  };
  return valid(root, -Infinity, Infinity);
};
