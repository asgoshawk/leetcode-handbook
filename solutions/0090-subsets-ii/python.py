class Solution:
    def subsetsWithDup(self, nums):
        nums.sort()
        result, path = [], []
        def dfs(start):
            result.append(path.copy())
            for i in range(start, len(nums)):
                if i > start and nums[i] == nums[i - 1]:
                    continue
                path.append(nums[i])
                dfs(i + 1)
                path.pop()
        dfs(0)
        return result
