# topics = ["位运算", "字典树"]

from typing import List


class Trie:
    def __init__(self) -> None:
        # 左子树指向表示 0 的子节点
        self.left = None
        # 右子树指向表示 1 的子节点
        self.right = None


class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        """
        Bit Manipulation & Trie
        time O(nlogC), space O(nlogC), n 为 nums 长度, C 为数组中数据范围, 本题中 C < 2 ^ 31
        """
        # 字典树的根节点
        root = Trie()
        # 最高位的二进制位编号为 30
        HIGH_BIT = 30

        def add(num: int):
            cur = root
            for k in range(HIGH_BIT, -1, -1):
                bit = (num >> k) & 1
                if bit == 0:
                    if not cur.left:
                        cur.left = Trie()
                    cur = cur.left
                else:
                    if not cur.right:
                        cur.right = Trie()
                    cur = cur.right

        def check(num: int) -> int:
            cur = root
            x = 0
            for k in range(HIGH_BIT, -1, -1):
                bit = (num >> k) & 1
                if bit == 0:
                    # a_i 的第 k 个二进制位为 0，应当往表示 1 的子节点 right 走
                    if cur.right:
                        cur = cur.right
                        x = x * 2 + 1
                    else:
                        cur = cur.left
                        x = x * 2
                else:
                    # a_i 的第 k 个二进制位为 1，应当往表示 0 的子节点 left 走
                    if cur.left:
                        cur = cur.left
                        x = x * 2 + 1
                    else:
                        cur = cur.right
                        x = x * 2
            return x

        n = len(nums)
        x = 0
        for i in range(1, n):
            # 将 nums[i - 1] 放入字典树，此时 nums[0 : i) 都在字典树中
            add(nums[i - 1])
            # 将 nums[i] 看作 ai，找出最大的 x 更新答案
            x = max(x, check(nums[i]))

        return x
