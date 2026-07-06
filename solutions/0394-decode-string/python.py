class Solution:
    def decodeString(self, s):
        stack = []
        current, num = '', 0
        for ch in s:
            if ch.isdigit():
                num = num * 10 + int(ch)
            elif ch == '[':
                stack.append((current, num))
                current, num = '', 0
            elif ch == ']':
                prev, count = stack.pop()
                current = prev + current * count
            else:
                current += ch
        return current
