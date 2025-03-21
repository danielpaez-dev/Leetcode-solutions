function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let flowersCanBePlanted: number = 0;
    for (let i: number = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if ((flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) && (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)) {
                flowersCanBePlanted += 1;
                flowerbed[i] = 1
            }
        }
    };
    return flowersCanBePlanted >= n;
}