class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        groups = {}
        for word in strs:
            signature = "".join(sorted(word))
            groups.setdefault(signature, []).append(word)
        return list(groups.values())
