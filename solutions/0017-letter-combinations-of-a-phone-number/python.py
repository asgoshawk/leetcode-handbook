class Solution:
    def letterCombinations(self, digits):
        if not digits:
            return []
        mapping = {'2':'abc','3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
        result = []
        def dfs(i, path):
            if i == len(digits):
                result.append(path)
                return
            for ch in mapping[digits[i]]:
                dfs(i + 1, path + ch)
        dfs(0, '')
        return result
