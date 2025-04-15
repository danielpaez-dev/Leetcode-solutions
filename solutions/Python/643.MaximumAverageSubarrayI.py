class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        window_sum: int = sum(nums[:k])
        sum_max: float = window_sum

        for i in range(1, len(nums) - k + 1):
            window_sum = window_sum - nums[i - 1] + nums[i + k - 1]
            sum_max = max(sum_max, window_sum)

        return sum_max / k
