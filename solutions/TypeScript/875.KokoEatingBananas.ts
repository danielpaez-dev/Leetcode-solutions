function minEatingSpeed(piles: number[], h: number): number {
  let left: number = 1;
  let right: number = Math.max(...piles);

  while (left < right) {
    let mid: number = Math.floor((left + right) / 2);

    let total: number = 0;
    for (const pile of piles) {
      total += Math.floor((pile + mid - 1) / mid);
    }

    if (total <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
