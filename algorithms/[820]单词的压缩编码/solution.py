from typing import List


class Solution:
    def minimumLengthEncoding(self, words: List[str]) -> int:
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
