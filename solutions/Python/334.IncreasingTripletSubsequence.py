class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        tripletI, tripletJ = math.inf, math.inf

        for num in nums:
            if num <= tripletI:
                tripletI = num
            elif num <= tripletJ:
                tripletJ = num
            else:
                return True

        return False