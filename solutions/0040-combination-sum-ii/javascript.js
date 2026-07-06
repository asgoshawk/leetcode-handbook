var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [], path = [];
  const dfs = (start, remain) => {
    if (remain === 0) { result.push([...path]); return; }
    for (let i = start; i < candidates.length && candidates[i] <= remain; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]); dfs(i + 1, remain - candidates[i]); path.pop();
    }
  };
  dfs(0, target);
  return result;
};
