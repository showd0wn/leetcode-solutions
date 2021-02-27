# topics = ["字典树"]

from collections import defaultdict
from functools import reduce
from typing import List


class Solution(object):
    """
    参考1 https://leetcode-cn.com/problems/replace-words/solution/dan-ci-ti-huan-by-leetcode/
    参考2 https://blog.csdn.net/qq_38619744/article/details/80457573
    """

    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        Trie = lambda: defaultdict(Trie)
        trie = Trie()
        END = True

        for root in dictionary:
            reduce(dict.__getitem__, root, trie)[END] = root

        def replace(word: str) -> str:
            cur = trie
            for letter in word:
                if letter not in cur or END in cur:
                    break
                cur = cur[letter]
            return cur.get(END, word)

        return " ".join(map(replace, sentence.split()))
