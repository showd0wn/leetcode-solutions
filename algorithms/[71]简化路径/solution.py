# topics = ["栈"]

from typing import List


class Solution:
    def simplifyPath(self, path: str) -> str:
        st: List[str] = []

        for s in path.split('/'):
            if not s or s == '.':
                continue
            if s == '..':
                if st:
                    st.pop()
            else:
                st.append(s)

        return f'/{"/".join(st)}'
