function maxOperations(nums: number[], k: number): number {
  let res: number = 0;
  const numsMap: Map<number, number> = new Map();

  for (const num of nums) {
    let complement: number = k - num;
    if (numsMap.get(complement) > 0) {
      res++;
      numsMap.set(complement, numsMap.get(complement) - 1);
    } else {
      numsMap.set(num, (numsMap.get(num) || 0) + 1);
    }
  }

  return res;
}
