class Solution:
    def removeElement(self, nums, val):
        write = 0
        for num in nums:
            if num != val:
                nums[write] = num
                write += 1
        return write
