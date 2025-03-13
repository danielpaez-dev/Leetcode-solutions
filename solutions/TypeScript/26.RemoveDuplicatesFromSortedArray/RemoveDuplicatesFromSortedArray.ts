function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let index: number = 1;

  for (let i: number = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
}
