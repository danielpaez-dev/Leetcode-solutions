function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1: Set<number> = new Set(nums1);
  const set2: Set<number> = new Set(nums2);
  return [
    [...set1].filter((n) => !set2.has(n)),
    [...set2].filter((n) => !set1.has(n)),
  ];
}
