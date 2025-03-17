class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n

        step1 = 1
        step2 = 2

        # When using range in python, range does not include n. So since n = 5, it goes up to 4 without including 5.
        for i in range(3, n + 1):
            temp = step2
            step2 += step1
            step1 = temp

        return step2
