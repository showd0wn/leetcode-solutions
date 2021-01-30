from collections import defaultdict
from functools import reduce


TrieNode = lambda: defaultdict(TrieNode)


class WordDictionary:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        reduce(dict.__getitem__, word, self.root)['end'] = True

    def search(self, word: str) -> bool:
        def dfs(node: WordDictionary, s: str) -> bool:
            for idx, char in enumerate(s):
                if char == '.':
                    return any(dfs(node[key], s[idx + 1:]) for key in node if key != 'end')
                if char not in node:
                    return False
                node = node[char]

            return 'end' in node

        return dfs(self.root, word)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
