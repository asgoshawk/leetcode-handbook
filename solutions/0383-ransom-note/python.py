class Solution:
    def canConstruct(self, ransomNote, magazine):
        counts = {}
        for ch in magazine:
            counts[ch] = counts.get(ch, 0) + 1
        for ch in ransomNote:
            if counts.get(ch, 0) == 0:
                return False
            counts[ch] -= 1
        return True
