# topics = ["栈"]

from typing import List, Tuple


class Solution:
    def decodeString(self, s: str) -> str:
        st: List[Tuple[int, str]] = []
        # 记录重复次数
        multi: int = 0
        # 记录当前字符串
        res: str = ''

        for c in s:
            if c == '[':
                st.append((multi, res))
                multi = 0
                res = ''

            elif c == ']':
                _multi, _res = st.pop()
                res = _res + res * _multi

            elif ord('0') <= ord(c) <= ord('9'):
                multi = multi * 10 + int(c)

            else:
                res += c

        return res
