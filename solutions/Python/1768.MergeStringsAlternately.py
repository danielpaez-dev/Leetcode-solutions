class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        res: string = ""
        i: int = 0
        lenWord1: int = len(word1)
        lenWord2: int = len(word2)

        while (i < lenWord1 or i < lenWord2):
            if i < lenWord1:
                res += word1[i]
            if i < lenWord2:
                res += word2[i]
            i += 1

        return res
