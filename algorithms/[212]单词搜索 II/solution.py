# topics = ["字典树", "深度优先搜索"]

from typing import Any, Dict, List


class Trie:
    def __init__(self):
        self.root = {}

    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            node = node.setdefault(char, {})
        node['end'] = word


class Solution:
    """
    参考 https://leetcode-cn.com/problems/word-search-ii/solution/python3-dfs-by-trojanmaster-7zmx/
    """

    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        def dfs(i: int, j: int, root: Dict[str, Any]) -> None:
            c = board[i][j]
            print(c, root[c])

            last = root[c].pop('end', False)

            if last:
                res.append(last)

            board[i][j] = '#'
            for x, y in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                ni, nj = i + x, j + y
                if 0 <= ni < m and 0 <= nj < n and board[ni][nj] in root[c]:
                    dfs(ni, nj, root[c])
            board[i][j] = c

            if not root[c]:
                root.pop(c)

        m, n = len(board), len(board[0])
        res: List[str] = []

        trie = Trie()

        for word in words:
            trie.insert(word)

        for i in range(m):
            for j in range(n):
                if board[i][j] in trie.root:
                    dfs(i, j, trie.root)

        return res


s = Solution()
print(
    s.findWords(
        [
            ['o', 'a', 'a', 'n'],
            ['e', 't', 'a', 'e'],
            ['i', 'h', 'k', 'r'],
            ['i', 'f', 'l', 'v'],
        ],
        ['oath', 'pea', 'eat', 'rain'],
    )
)
