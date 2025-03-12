from TwoSum import (
    Solution,
)
from GenerateRandomTargetAndArray import nums, target


def print_result(result, target, nums):
    if len(result) == 0:
        print(f"No pair of numbers adds up to the target sum of {target}.")
    else:
        print(
            f"The addition of nums[{result[0]}]:{nums[result[0]]} and nums[{result[1]}]:{nums[result[1]]} is {target}"
        )


solution = Solution()
result = solution.twoSum(nums, target)
print_result(result, target, nums)
