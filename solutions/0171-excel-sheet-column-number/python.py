class Solution:
    def titleToNumber(self, columnTitle):
        answer = 0
        for ch in columnTitle:
            answer = answer * 26 + ord(ch) - ord("A") + 1
        return answer
