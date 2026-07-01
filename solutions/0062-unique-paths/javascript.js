var uniquePaths = function (m, n) {
  const dp = Array(n).fill(1);
  for (let r = 1; r < m; r++) for (let c = 1; c < n; c++) dp[c] += dp[c - 1];
  return dp[n - 1];
};
