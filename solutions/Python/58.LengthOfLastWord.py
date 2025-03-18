class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        string_array = s.strip().split()
        return len(string_array[-1])
