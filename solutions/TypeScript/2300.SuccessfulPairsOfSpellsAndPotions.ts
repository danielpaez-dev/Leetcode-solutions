function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  potions.sort((a, b) => a - b);
  const n: number = potions.length;
  let result: number[] = [];
  let left: number;
  let right: number;

  for (const spell of spells) {
    const requiredPosition: number = Math.ceil(success / spell);
    left = 0;
    right = n;
    while (left < right) {
      let mid: number = Math.floor((left + right) / 2);
      if (potions[mid] >= requiredPosition) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    let count: number = n - left;
    result.push(count);
  }
  return result;
}
