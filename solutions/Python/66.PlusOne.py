class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:

        length: int = len(digits)

        for i in reversed(range(length)):
            digits[i] += 1
            if digits[i] < 10:
                return digits
            digits[i] = 0

        return [1] + digits
