# topics = ["字典树", "深度优先搜索"]


from typing import Dict, Any


class WordDictionary:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = {}
        self.end = '#'

    def addWord(self, word: str) -> None:
        node = self.root
        for char in word:
            node = node.setdefault(char, {})
        node[self.end] = word

    def search(self, word: str) -> bool:
        def dfs(node: Dict[str, Any], s: str) -> bool:
            for idx, char in enumerate(s):
                if char == '.':
                    return any(dfs(node[key], s[idx + 1 :]) for key in node if key != self.end)
                if char not in node:
                    return False
                node = node[char]

            return self.end in node

        return dfs(self.root, word)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
