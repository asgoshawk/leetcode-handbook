class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        lowest = float("inf")
        best = 0
        for price in prices:
            lowest = min(lowest, price)
            best = max(best, price - lowest)
        return best
