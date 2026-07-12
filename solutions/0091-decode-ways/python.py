class Solution:
    def numDecodings(self, s):
        prev2, prev1 = 1, 0 if s[0] == "0" else 1
        for i in range(1, len(s)):
            current = 0 if s[i] == "0" else prev1
            two = int(s[i - 1:i + 1])
            if 10 <= two <= 26:
                current += prev2
            prev2, prev1 = prev1, current
        return prev1
