import { twoSum } from "./TwoSum";
import { nums, target } from "./GenerateRandomTargetAndArray";

const result = twoSum(nums, target);

function printResult(result: number[]): void {
  if (result.length === 0) {
    console.log(`No pair of numbers adds up to the target sum of ${target}.`);
  } else {
    console.log(
      `The addition of nums[${result[0]}]:${nums[result[0]]} and nums[${
        result[1]
      }]:${nums[result[1]]} is ${target}`
    );
  }
}

printResult(result);
