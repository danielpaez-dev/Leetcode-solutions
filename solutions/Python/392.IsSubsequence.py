class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i: int = 0
        for c in t:
            if i < len(s) and c == s[i]:
                i += 1
        return i == len(s)
