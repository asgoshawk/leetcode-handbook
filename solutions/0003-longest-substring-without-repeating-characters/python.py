class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        last_seen = {}
        left = 0
        best = 0

        for right, character in enumerate(s):
            left = max(left, last_seen.get(character, 0))
            best = max(best, right - left + 1)
            last_seen[character] = right + 1

        return best
