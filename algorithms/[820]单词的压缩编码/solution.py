from typing import List


class Solution:
    def minimumLengthEncoding(self, words: List[str]) -> int:
        """
        Trie
        time O(∑wi), space O(S·∑wi), wi 为 words[i] 的长度, S 为字符集大小 26
        """
        words.sort(key=lambda x: len(x), reverse=True)
        n = len(words)
        dp = len(words[0]) + 1

        for i in range(1, n):
            flag = True
            for w in words[:i]:
                if w.endswith(words[i]):
                    flag = False
            if flag:
                dp += len(words[i]) + 1

        return dp
