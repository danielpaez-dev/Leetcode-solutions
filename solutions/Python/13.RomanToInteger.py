class Solution:
    def romanToInt(self, s: str) -> int:
        result = 0
        length = len(s)

        for i in range(length):
            if i < length - 1 and (
                (s[i] == "I" and s[i + 1] in ["V", "X"])
                or (s[i] == "X" and s[i + 1] in ["L", "C"])
                or (s[i] == "C" and s[i + 1] in ["D", "M"])
            ):
                result -= self.roman_switch(s[i])
            else:
                result += self.roman_switch(s[i])

        return result

    def roman_switch(self, char: str) -> int:
        switch = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        return switch.get(char, 0)  # 0 if the character is not in the dictionary
