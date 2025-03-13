/*
 * The equation is: a + b = x; => a = current number , b = complement, x = target.
 * - i is the index of the current number (a).
 * - nums[i] is the current number (a).
 * The idea is to find a number (complement b) whose sum with nums[i] equals the target.
 */

let twoSum = function (nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }

  return []; // In case there is no solution
};
