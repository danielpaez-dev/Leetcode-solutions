class Solution:
    def countBits(self, n: int) -> List[int]:
        ans = [0] * (n + 1)
        for i in range(1, n + 1):
            ans[i] = self.countOnes(i)
        return ans

    def countOnes(self, n: int) -> int:
        count: int = 0
        while n > 0:
            if n % 2 == 1:
                count += 1
            n //= 2
        return count
