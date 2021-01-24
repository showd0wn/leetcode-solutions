from collections import defaultdict
from typing import List, Set, DefaultDict


class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        d: DefaultDict[str, List[Set[str]]] = defaultdict(list)

        for name, *emails in accounts:
            emails = set(emails)
            emails_list = d[name]
            emails_list.append(emails)
            for ele in emails_list[:-1]:
                # 集合求并集
                if ele & emails:
                    emails_list.remove(ele)
                    emails_list[-1].update(ele)

        res = []
        for k, v in d.items():
            for s in v:
                res.append([k, *list(sorted(s))])

        return res
