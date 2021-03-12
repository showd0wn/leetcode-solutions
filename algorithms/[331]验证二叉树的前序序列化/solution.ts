// topics = ["树"]

// 对于任何有向图，所有顶点的出度之和总是等于入度之和（二叉树可以视作一个连通无环的有向图）
function isValidSerialization(preorder: string): boolean {
  const arr = preorder.split(',');
  let indegree = 0;
  let outdegree = 0;

  for (let i = 0, n = arr.length; i < n; i += 1) {
    if (i == 0) {
      // 只有根节点入度为 0
      indegree += 0;
    } else {
      // 其它节点入度皆为 1
      indegree += 1;
    }

    // 不满足二叉树先序序列
    if (indegree > outdegree) {
      return false;
    }

    if (arr[i] == '#') {
      // 空节点出度为 0
      outdegree += 0;
    } else {
      // 其它节点出度皆为 2
      outdegree += 2;
    }
  }

  return indegree == outdegree;
}
