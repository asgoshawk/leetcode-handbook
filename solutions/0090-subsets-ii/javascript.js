var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [], path = [];
  const dfs = (start) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]); dfs(i + 1); path.pop();
    }
  };
  dfs(0);
  return result;
};
