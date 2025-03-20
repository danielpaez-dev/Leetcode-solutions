class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        enoughCandies = []
        MAX_CANDIES = max(candies)
        for candy in candies:
            if candy + extraCandies >= MAX_CANDIES:
                enoughCandies.append(True)
            else:
                enoughCandies.append(False)
        return enoughCandies