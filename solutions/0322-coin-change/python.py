class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        minimum = [amount + 1] * (amount + 1)
        minimum[0] = 0
        for subtotal in range(1, amount + 1):
            for coin in coins:
                if coin <= subtotal:
                    minimum[subtotal] = min(minimum[subtotal], minimum[subtotal - coin] + 1)
        return -1 if minimum[amount] > amount else minimum[amount]
