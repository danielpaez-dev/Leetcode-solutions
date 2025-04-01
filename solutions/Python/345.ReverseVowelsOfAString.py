class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = {"a", "e", "i", "o", "u"}
        s_list = list(s)

        left = 0
        right = len(s) - 1

        while left < right:
            if s_list[left].lower() not in vowels:
                left += 1
            elif s_list[right].lower() not in vowels:
                right -= 1
            else:
                s_list[left], s_list[right] = s_list[right], s_list[left]
                left += 1
                right -= 1

        return "".join(s_list)
