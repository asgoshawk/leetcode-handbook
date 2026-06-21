from collections import Counter


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        need = Counter(t)
        missing = len(t)
        left = 0
        best_start, best_length = 0, float("inf")

        for right, character in enumerate(s):
            if need[character] > 0:
                missing -= 1
            need[character] -= 1

            while missing == 0:
                if right - left + 1 < best_length:
                    best_start, best_length = left, right - left + 1
                removed = s[left]
                need[removed] += 1
                if need[removed] > 0:
                    missing += 1
                left += 1

        return "" if best_length == float("inf") else s[best_start:best_start + best_length]
