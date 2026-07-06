class Solution:
    def isHappy(self, n):
        seen = set()
        def next_value(x):
            total = 0
            while x:
                x, digit = divmod(x, 10)
                total += digit * digit
            return total
        while n != 1 and n not in seen:
            seen.add(n)
            n = next_value(n)
        return n == 1
