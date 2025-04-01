class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_area: int = 0
        left: int = 0
        right: int = len(height) - 1

        while left < right:
            area: int = (right - left) * min(height[left], height[right])
            max_area = max(max_area, area)

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return max_area
