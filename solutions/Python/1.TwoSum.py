class Solution:
    """
    The equation is: a + b = x; => a = current number , b = complement, x = target.
    - i is the index of the current number (a).
    - nums[i] is the current number (a).
    The idea is to find a number (complement b) whose sum with nums[i] equals the target.
    """

    def twoSum(self, nums: list[int], target: int) -> list[int]:
        num_map = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_map:
                return [num_map[complement], i]
            num_map[num] = i
        return []  # In case there's no solution
