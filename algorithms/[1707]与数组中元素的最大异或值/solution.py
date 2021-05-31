# topics = ["位运算", "字典树"]

from typing import List


class Trie:
    L = 30

    def __init__(self) -> None:
        self.left = None
        self.right = None

    def insert(self, val: int):
        node = self
        for i in range(Trie.L, -1, -1):
            bit = (val >> i) & 1
            if bit == 0:
                if not node.left:
                    node.left = Trie()
                node = node.left
            else:
                if not node.right:
                    node.right = Trie()
                node = node.right

    def getMaxXor(self, val: int) -> int:
        ans, node = 0, self
        for i in range(Trie.L, -1, -1):
            bit = (val >> i) & 1
            check = False
            if bit == 0:
                if node.right:
                    node = node.right
                    check = True
                else:
                    node = node.left
            else:
                if node.left:
                    node = node.left
                    check = True
                else:
                    node = node.right
            if check:
                ans |= 1 << i
        return ans


class Solution:
    def maximizeXor(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        """
        Bit Manipulation & Trie
        time O(nlogn + qlogq + (n + q) * L), space O(q + n * L), n 和 q 分别为 nums 和 queries 长度, L 是 nums 中每个元素二进制表示的长度, L = 30
        近似题 421.数组中两个数的最大异或值
        参考 https://leetcode-cn.com/problems/maximum-xor-with-an-element-from-array/solution/yu-shu-zu-zhong-yuan-su-de-zui-da-yi-huo-7erc/
        """
        n, q = len(nums), len(queries)
        nums.sort()
        queries = sorted(
            [(x, m, i) for i, (x, m) in enumerate(queries)], key=lambda query: query[1]
        )

        ans = [0] * q
        t = Trie()
        idx = 0
        for x, m, qid in queries:
            while idx < n and nums[idx] <= m:
                t.insert(nums[idx])
                idx += 1
            if idx == 0:
                # 字典树为空
                ans[qid] = -1
            else:
                ans[qid] = t.getMaxXor(x)

        return ans
