class Solution:
    def majorityElement(self, nums):
        candidate, count = None, 0
        for number in nums:
            if count == 0:
                candidate = number
            count += 1 if number == candidate else -1
        return candidate
