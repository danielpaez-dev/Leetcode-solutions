var divideArray = function (nums) {
    if (nums.length < 2 || nums.length % 2 !== 0) return false;

    const pairsNeeded = nums.length / 2;
    let pairs = 0;
    let numMap = new Map();

    for (const num of nums) {
        if (numMap.has(num)) {
            let valor = numMap.get(num);
            valor += 1;
            numMap.set(num, valor); s

            if (valor % 2 === 0) {
                pairs++;
            }
        } else {
            numMap.set(num, 1);
        }
    }
    return pairs === pairsNeeded;
};
