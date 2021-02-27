# topics = ["字典树"]

from typing import List


class Trie:
    def __init__(self):
        self.root = {}
        self.end = '#'

    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            node = node.setdefault(char, {})
        node[self.end] = word

    def find_prefix(self, word: str):
        node = self.root
        for char in word:
            if char not in node or self.end in node:
                break
            node = node[char]

        # 如果存在前缀则返回，否则返回自身
        return node.get(self.end, word)


class Solution(object):
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        trie = Trie()

        for pre in dictionary:
            trie.insert(pre)

        return " ".join(map(trie.find_prefix, sentence.split()))
