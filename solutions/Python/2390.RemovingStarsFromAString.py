class Solution:
    def removeStars(self, s: str) -> str:
        stack = Stack()

        for c in s:
            if c == "*":
                stack.pop()
            else:
                stack.push(c)

        return str(stack)


class Stack:
    def __init__(self) -> None:
        self._stack: list[str] = []

    def push(self, c) -> None:
        self._stack.append(c)

    def pop(self) -> None:
        if not self.isEmpty():
            self._stack.pop()

    def isEmpty(self) -> bool:
        return len(self._stack) == 0

    def __str__(self) -> str:
        return ''.join(self._stack)

    @property
    def stack(self):
        return self._stack