var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    let total = 0
    for (const pile of piles) {
      total += Math.floor((pile + mid - 1) / mid);
    }

    if (total <= h) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
};