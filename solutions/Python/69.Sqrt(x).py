class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x

        start = 1
        end = math.floor(x // 2)
        solution = 0

        while start <= end:
            mid = (start + end) // 2

            if mid * mid == x:
                return mid

            elif mid * mid < x:
                solution = mid
                start = mid + 1
            else:
                end = mid - 1

        return solution