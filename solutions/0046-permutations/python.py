class Solution:
    def permute(self, nums):
        result = []

        def visit(first):
            if first == len(nums):
                result.append(nums[:])
            for i in range(first, len(nums)):
                nums[first], nums[i] = nums[i], nums[first]
                visit(first + 1)
                nums[first], nums[i] = nums[i], nums[first]

        visit(0)
        return result
