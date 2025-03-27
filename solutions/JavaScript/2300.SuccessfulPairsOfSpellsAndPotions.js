var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b);
    const n = potions.length;
    const result = [];

    for (const spell of spells) {
        const requiredPotion = Math.floor((success + spell - 1) / spell);

        let left = 0;
        let right = n;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (potions[mid] >= requiredPotion) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        const count = n - left;
        result.push(count);
    }

    return result;
};