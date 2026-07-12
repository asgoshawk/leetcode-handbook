function numSquares(n) {
  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let x = 1; x <= n; x++) {
    for (let s = 1; s * s <= x; s++) {
      dp[x] = Math.min(dp[x], dp[x - s * s] + 1);
    }
  }
  return dp[n];
}
