class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 1:
            return strs[
                0
            ]  # In case there is only one value so it returns the strs directly without passing the for
        commonPrefix = ""

        for i in range(min(len(s) for s in strs)):
            char = strs[0][i]

            for j in range(len(strs)):
                if strs[j][i] != char:
                    return commonPrefix

            commonPrefix += char

        return commonPrefix  # In case there is an array with multiple ""
