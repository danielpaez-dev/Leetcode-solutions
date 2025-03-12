import random

MIN_LENGTH = 2
MAX_LENGTH = 10**4
MIN_VAL = -(10**9)
MAX_VAL = 10**9


def generate_random_array(min_len, max_len, min_val, max_val):
    length = random.randint(min_len, max_len)
    return [random.randint(min_val, max_val) for _ in range(length)]


# Generate random data
target = random.randint(MIN_VAL, MAX_VAL)
nums = generate_random_array(MIN_LENGTH, MAX_LENGTH, MIN_VAL, MAX_VAL)

# -----------------------------------------------------------------
# Examples of LeetCode (uncomment the one you want to use)
# -----------------------------------------------------------------

# Example 1:
nums = [2, 7, 11, 15]
target = 9

# Example 2:
# nums = [3, 2, 4]
# target = 6

# Example 3:
# nums = [3, 3]
# target = 6
