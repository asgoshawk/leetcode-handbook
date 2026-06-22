class Solution:
    def singleNumber(self, nums):
        answer = 0
        for number in nums:
            answer ^= number
        return answer
