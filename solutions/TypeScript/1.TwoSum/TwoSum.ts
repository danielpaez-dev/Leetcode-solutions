// Only for testing in VSCODE
import { nums, target } from "./GenerateRandomTargetAndArray";

/*
 * The equation is: a + b = x; => a = current number , b = complement, x = target.
 * - i is the index of the current number (a).
 * - nums[i] is the current number (a).
 * The idea is to find a number (complement b) whose sum with nums[i] equals the target.
 */

function twoSum(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }

  return [];
}

// ONLY FOR TEST THE RESULT IN VSCODE, THIS IS NOT NEEDED FOR LEETCODE
export { twoSum };
