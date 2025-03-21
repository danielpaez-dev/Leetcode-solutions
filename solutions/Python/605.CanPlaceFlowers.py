class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        flowers_can_be_planted: int = 0
        for i in range(len(flowerbed)):
            if flowerbed[i] == 0:
                if (i - 1 < 0 or flowerbed[i - 1] == 0) and (i + 1 >= len(flowerbed) or flowerbed[i + 1] == 0):
                    flowers_can_be_planted += 1
                    flowerbed[i] = 1
        return flowers_can_be_planted >= n