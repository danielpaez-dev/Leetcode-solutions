/*
* Constraints: The length of the array should be at least of 2 and maximum 10^4
* The values of each index should be at least of -10^9 and maximum 10^9
* The target should be at least of -10^9 and maximum 10^9
*/

const minLengthArray = 2;
const maxLengthArray = Math.pow(10, 4); // 10,000
const minValue = -Math.pow(10, 9); // -10^9
const maxValue = Math.pow(10, 9); // 10^9

/*
// For debugging, use this instead because it's much easier to find the target
const minLengthArray = 2;
const maxLengthArray = 10; // We limit to a maximum of 10 to facilitate testing.
const minValue = 1; // Set the minimum to 1
const maxValue = 10; // Set the maximum to 10
*/

let target = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

function generateRandomArray(
  minLengthArray,
  maxLengthArray,
  minValue,
  maxValue
) {
  const length =
    Math.floor(Math.random() * (maxLengthArray - minLengthArray + 1)) +
    minLengthArray;

  let nums = [];
  for (let i = 0; i < length; i++) {
    const num =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    nums.push(num);
  }

  return nums;
}

let nums = generateRandomArray(
  minLengthArray,
  maxLengthArray,
  minValue,
  maxValue
);

// Example 1:
nums = [2, 7, 11, 15];
target = 9;

/*
// Example 2:
nums = [3, 2, 4];
target = 6;
*/

/*
* Example 3:
nums = [3, 3];
target = 6;
*/

export { target, nums };

// * Note: I use let in target and nums to be able to use the examples described in LeetCode. Instead, use const.
