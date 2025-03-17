from typing import List

class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        if len(nums) < 2 or len(nums) % 2 != 0:
            return False;

        pairs_needed = len(nums) // 2
        pairs = 0
        num_map = {}

        for num in nums:
            num_map[num] = num_map.get(num, 0) + 1

            if num_map[num] % 2 == 0:
                pairs += 1

        return pairs == pairs_needed