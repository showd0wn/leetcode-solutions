# topics = ["字符串"]

from typing import List


class Solution:
    def compress(self, chars: List[str]) -> int:
        end = n = len(chars)

        for i in range(1, n)[::-1]:
            if chars[i] != chars[i - 1]:
                count = end - i
                # 只有一个连续字符不用处理
                if count != 1:
                    while count:
                        end -= 1
                        chars[end] = str(count % 10)
                        count //= 10
                    del chars[i + 1 : end]
                end = i

            # 单独处理 i == 1 的情况
            elif i == 1:
                count = end
                while count:
                    end -= 1
                    chars[end] = str(count % 10)
                    count //= 10
                del chars[1:end]
                end = 0

        return len(chars)
