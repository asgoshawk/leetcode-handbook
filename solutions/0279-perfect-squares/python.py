class Solution:
    def numSquares(self, n):
        dp = [0] + [float("inf")] * n
        for x in range(1, n + 1):
            s = 1
            while s * s <= x:
                dp[x] = min(dp[x], dp[x - s * s] + 1)
                s += 1
        return dp[n]
