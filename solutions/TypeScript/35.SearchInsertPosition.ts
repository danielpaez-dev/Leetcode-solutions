function searchInsert(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  let mid: number = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
