import { twoSum } from "./TwoSum.js";
import { nums, target } from "./GenerateRandomTargetAndArray.js";

const result = twoSum(nums, target);

function prompt(result) {
    if (result.length === 0) {
        console.log(`No pair of numbers adds up to the target sum of ${target}.`);
    } else {
        console.log(
            `The addition of nums[${result[0]}]:${nums[result[0]]} and nums[${result[1]}]: ${nums[result[1]]} is ${target}`
        );
    }
}
prompt(result);