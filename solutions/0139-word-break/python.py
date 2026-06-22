class Solution:
    def wordBreak(self, s, wordDict):
        words = set(wordDict)
        reachable = [True] + [False] * len(s)
        for end in range(1, len(s) + 1):
            reachable[end] = any(reachable[start] and s[start:end] in words
                                 for start in range(end))
        return reachable[-1]
