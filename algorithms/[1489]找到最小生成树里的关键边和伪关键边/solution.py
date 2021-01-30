from typing import List


class Solution:
    def findCriticalAndPseudoCriticalEdges(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        def Kruskal(edges):
            father = list(range(n))

            def find(x):
                if x != father[x]:
                    father[x] = find(father[x])
                return father[x]
            n_edges = 0
            cost = 0
            edges = sorted(edges, key=lambda x: x[-1])
            for i, j, c in edges:
                a = find(i)
                b = find(j)
                if a != b:
                    cost += c
                    n_edges += 1
                    father[a] = b
                if n_edges == n - 1:
                    break
            return cost

        def Kruskal_tmp(edges, accepted_edges):
            def find(x):
                if x != father[x]:
                    father[x] = find(father[x])
                return father[x]
            n_edges = len(accepted_edges)
            cost = 0
            father = list(range(n))
            for k in accepted_edges:
                i, j, c = edges[k]
                cost += c
                a = find(i)
                b = find(j)
                if a != b:
                    father[a] = b

            edges = sorted(edges, key=lambda x: x[-1])
            for i, j, c in edges:
                a = find(i)
                b = find(j)
                if a != b:
                    cost += c
                    n_edges += 1
                    father[a] = b
                if n_edges == n - 1:
                    break
            return cost
        mst = Kruskal(edges)
        critical = []
        non_critical = []

        for i in range(len(edges)):
            ans = Kruskal(edges[:i] + edges[i + 1:])

            if ans != mst:
                critical.append(i)

        for i in range(len(edges)):
            if Kruskal_tmp(edges, [i]) == mst and i not in critical:
                non_critical.append(i)
        return [critical, non_critical]
