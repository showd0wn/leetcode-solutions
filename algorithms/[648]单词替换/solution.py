from collections import defaultdict
from functools import reduce


class Solution(object):
    # 参考1 https://leetcode-cn.com/problems/replace-words/solution/dan-ci-ti-huan-by-leetcode/
    # 参考2 https://blog.csdn.net/qq_38619744/article/details/80457573

    def replaceWords(self, roots, sentence):
        Trie = lambda: defaultdict(Trie)
        trie = Trie()
        END = True

        for root in roots:
            reduce(dict.__getitem__, root, trie)[END] = root

        def replace(word):
            cur = trie
            for letter in word:
                if letter not in cur or END in cur:
                    break
                cur = cur[letter]
            return cur.get(END, word)

        return " ".join(map(replace, sentence.split()))
