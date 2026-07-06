var generateParenthesis = function (n) {
  const result = [];
  const dfs = (left, right, path) => {
    if (path.length === 2 * n) { result.push(path); return; }
    if (left > 0) dfs(left - 1, right, path + '(');
    if (right > left) dfs(left, right - 1, path + ')');
  };
  dfs(n, n, '');
  return result;
};
