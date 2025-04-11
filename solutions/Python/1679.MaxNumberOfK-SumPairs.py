class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        res: int = 0
        numsDict: Dict[int, int] = {}

        for num in nums:
            complement: int = k - num
            if numsDict.get(complement, 0) > 0:
                res += 1
                numsDict[complement] -= 1
            else:
                numsDict[num] = numsDict.get(num, 0) + 1

        return res