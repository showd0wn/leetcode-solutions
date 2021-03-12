# topics = ["树", "栈"]

from typing import List


class Solution:
    def isValidSerialization(self, preorder: str) -> bool:
        """
        辅助栈
        参考 https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/solution/pai-an-jiao-jue-de-liang-chong-jie-fa-zh-66nt/
        """
        stack: List[str] = []

        # 不断的砍掉叶子节点
        for node in preorder.split(','):
            stack.append(node)
            while (len(stack) >= 3 and stack[-1] == stack[-2] == '#' and stack[-3] != '#'):
                stack.pop(), stack.pop(), stack.pop()
                stack.append('#')

        # 合法的情况最后一定是一个#
        return len(stack) == 1 and stack.pop() == '#'
