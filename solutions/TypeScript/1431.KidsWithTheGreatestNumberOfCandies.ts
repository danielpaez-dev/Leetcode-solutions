function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const MAX_CANDIES: number = Math.max(...candies);
  let enoughCandies: boolean[] = [];
  for (let candy of candies) {
    enoughCandies.push(candy + extraCandies >= MAX_CANDIES);
  }
  return enoughCandies;
}
