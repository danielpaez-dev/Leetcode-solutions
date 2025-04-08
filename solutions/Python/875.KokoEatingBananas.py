class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        left, right = 1, max(piles)

        while left < right:
            mid = (left + right) // 2
            total = sum((pile + mid - 1) // mid for pile in piles)

            if total <= h:
                right = mid
            else:
                left = mid + 1

        return left
