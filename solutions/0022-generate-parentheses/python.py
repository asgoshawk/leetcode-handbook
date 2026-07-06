class Solution:
    def generateParenthesis(self, n):
        result = []
        def dfs(left, right, path):
            if len(path) == 2 * n:
                result.append(path)
                return
            if left > 0:
                dfs(left - 1, right, path + '(')
            if right > left:
                dfs(left, right - 1, path + ')')
        dfs(n, n, '')
        return result
