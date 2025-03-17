function divideArray(nums: number[]): boolean {
    if (nums.length < 2 || nums.length % 2 !== 0) return false;

    const pairsLength: number = nums.length / 2;
    let pairs: number = 0;
    let numsMap: Map<number, number> = new Map();

    for (const num of nums) {
        if (numsMap.has(num)) {
            let valor: number = numsMap.get(num);
            valor += 1;
            numsMap.set(num, valor);
            if (valor % 2 === 0) {
                pairs++;
            }
        } else {
            numsMap.set(num, 1);
        }
    }
    return pairs === pairsLength;
};