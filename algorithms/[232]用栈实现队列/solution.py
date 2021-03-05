# topics = ["栈"]

from typing import List


class MyQueue:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        # 输入栈，用于压入 push 传入的数据
        self.input: List[int] = []
        # 输出栈，用于 pop 和 peek 操作
        self.output: List[int] = []

    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        self.input.append(x)

    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        if len(self.output) == 0:
            while len(self.input) != 0:
                self.output.append(self.input.pop())

        return self.output.pop()

    def peek(self) -> int:
        """
        Get the front element.
        """
        if len(self.output) == 0:
            while len(self.input) != 0:
                self.output.append(self.input.pop())

        return self.output[-1]

    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return len(self.input) == 0 and len(self.output) == 0


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
