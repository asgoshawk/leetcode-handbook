var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2) return false;
  const target = sum / 2, dp = Array(target + 1).fill(false);
  dp[0] = true;
  for (const num of nums) for (let s = target; s >= num; s--) dp[s] ||= dp[s - num];
  return dp[target];
};
