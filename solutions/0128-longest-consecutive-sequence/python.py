class Solution:
    def longestConsecutive(self, nums):
        seen = set(nums)
        best = 0
        for num in seen:
            if num - 1 not in seen:
                cur, length = num, 1
                while cur + 1 in seen:
                    cur += 1
                    length += 1
                best = max(best, length)
        return best
