class Solution:
    def maxSubArray(self, nums):
        ending = best = nums[0]
        for number in nums[1:]:
            ending = max(number, ending + number)
            best = max(best, ending)
        return best
