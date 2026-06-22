var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let head = 0;
  while (head < queue.length) {
    const end = queue.length;
    const level = [];
    while (head < end) {
      const node = queue[head++];
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
};
