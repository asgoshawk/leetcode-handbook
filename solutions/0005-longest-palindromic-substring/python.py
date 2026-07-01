class Solution:
    def longestPalindrome(self, s):
        best_start, best_len = 0, 1
        def expand(left, right):
            nonlocal best_start, best_len
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            size = right - left - 1
            if size > best_len:
                best_start, best_len = left + 1, size
        for i in range(len(s)):
            expand(i, i)
            expand(i, i + 1)
        return s[best_start:best_start + best_len]
