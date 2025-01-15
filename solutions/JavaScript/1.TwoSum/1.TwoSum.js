// Only for testing in VSCODE
import { nums, target } from "./GenerateRandomTargetAndArray.js";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function(nums, target) {
    /*
    * The equation is: a + b = x; => a = current number , b = complement, x = target.
    * - i is the index of the current number (a).
    * - nums[i] is the current number (a).
    * The idea is to find a number (complement b) whose sum with nums[i] equals the target.
    */

  const numMap = {}

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap.hasOwnProperty(complement)) {
          return [numMap[complement], i];
      }
      numMap[nums[i]] = i;
  }

  return []; // In case there is no solution
};

// ONLY FOR TEST THE RESULT IN VSCODE, THIS IS NOT NEEDED FOR LEETCODE
const result = twoSum(nums, target);

if (result.length === 0) {
  console.log(`No pair of numbers adds up to the target sum of ${target}.`);
} else {
  console.log(
    `The addition of nums[${result[0]}]:${nums[ result[0] ]} and nums[${result[1]}]: ${nums[result[1]]} is ${target}`
  );
}
