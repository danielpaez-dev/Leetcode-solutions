class Solution:
    def guessNumber(self, n: int) -> int:
        left: int = 1
        end: int = n

        while left <= end:
            mid: int = (left + end) // 2
            pick = guess(mid)
            if pick == -1:
                end = mid - 1
            elif pick == 1:
                left = mid + 1
            else:
                return mid
