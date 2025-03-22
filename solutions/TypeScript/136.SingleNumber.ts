function singleNumber(nums: number[]): number {
  if (nums.length <= 1) return nums[0];

  let literal: { [key: number]: number } = {};

  for (const num of nums) {
    if (literal[num] === undefined) {
      literal[num] = 1;
    } else {
      literal[num] += 1;
    }
  }

  for (let key in literal) {
    if (literal[key] === 1) {
      return Number(key);
    }
  }
}
