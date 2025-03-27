from typing import List


class Solution:
    def successfulPairs(
        self, spells: List[int], potions: List[int], success: int
    ) -> List[int]:
        potions.sort()
        n = len(potions)
        result = []

        for spell in spells:
            required_potion = (success + spell - 1) // spell

            left = 0
            right = n
            while left < right:
                mid = (left + right) // 2
                if potions[mid] >= required_potion:
                    right = mid
                else:
                    left = mid + 1

            count = n - left
            result.append(count)

        return result
