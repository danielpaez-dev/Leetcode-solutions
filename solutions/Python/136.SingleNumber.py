class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        if len(nums) <= 1:
            return nums[0]

        dictionary = {}
        for num in nums:
            if dictionary.get(num) == None:
                dictionary[num] = 1
            else:
                dictionary[num] += 1

        for key, value in dictionary.items():
            if value == 1:
                return key
