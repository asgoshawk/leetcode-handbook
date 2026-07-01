class Solution:
    def combinationSum(self, candidates, target):
        candidates.sort()
        result, path = [], []
        def dfs(start, remain):
            if remain == 0:
                result.append(path.copy())
                return
            for i in range(start, len(candidates)):
                if candidates[i] > remain:
                    break
                path.append(candidates[i])
                dfs(i, remain - candidates[i])
                path.pop()
        dfs(0, target)
        return result
