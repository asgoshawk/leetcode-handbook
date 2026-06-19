class Solution:
    def isValid(self, s: str) -> bool:
        expected: list[str] = []
        pairs = {"(": ")", "[": "]", "{": "}"}

        for character in s:
            if character in pairs:
                expected.append(pairs[character])
            elif not expected or expected.pop() != character:
                return False

        return not expected
