/*
 * Constraints: The length of the array should be at least 2 and at most 10^4
 * The values of each index should be at least -10^9 and at most 10^9
 * The target should be at least -10^9 and at most 10^9
 */

const minLength = 2;
const maxLength = Math.pow(10, 4);
const minValue = -Math.pow(10, 9);
const maxValue = Math.pow(10, 9);

function generateRandomArray(minLen, maxLen, minVal, maxVal) {
  const length = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen;
  return Array.from({ length }, () =>
    Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal
  );
}

// Generate random data
let target = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
let nums = generateRandomArray(minLength, maxLength, minValue, maxValue);

// -----------------------------------------------------------------
// LeetCode Examples (Uncomment the one you want to use)
// -----------------------------------------------------------------

// Example 1:
nums = [2, 7, 11, 15];
target = 9;

// Example 2:
// nums = [3, 2, 4];
// target = 6;

// Example 3:
// nums = [3, 3];
// target = 6;

export { nums, target };
