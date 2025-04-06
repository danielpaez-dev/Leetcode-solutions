class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        for asteroid in asteroids:
            while stack and asteroid < 0 < stack[-1]:
                top = stack[-1]
                if top < abs(asteroid):
                    stack.pop()
                    continue
                elif top == abs(asteroid):
                    stack.pop()
                break
            else:
                stack.append(asteroid)

        return stack
