class Solution:
    def subarraySum(self, nums, k):
        count = {0: 1}
        prefix = result = 0
        for num in nums:
            prefix += num
            result += count.get(prefix - k, 0)
            count[prefix] = count.get(prefix, 0) + 1
        return result
