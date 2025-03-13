# Imports not needed in Leetcode
from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        index = 1

        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[index] = nums[i]
                index += 1

        return index
