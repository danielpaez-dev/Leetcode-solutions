var kidsWithCandies = function (candies, extraCandies) {
    const MAX_CANDIES = Math.max(...candies);
    let enoughCandies = [];
    for (candy of candies) {
        enoughCandies.push(candy + extraCandies >= MAX_CANDIES);
    }
    return enoughCandies;
};