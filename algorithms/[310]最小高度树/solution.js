/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// 类似拓扑排序，BFS 剔除入度为1的顶点，直到剩余 1-2 个节点
const findMinHeightTrees = function (n, edges) {
  if (edges.length <= 0) return [0];
  let adj = new Array(n), leaves = [];
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    adj[edges[i][0]].push(edges[i][1]);
    adj[edges[i][1]].push(edges[i][0]);
  }
  // find leaves
  for (let i = 0; i < n; i++) {
    if (adj[i].length === 1) {
      leaves.push(i);
    }
  }

  while (n > 2) {
    n -= leaves.length;
    let next = [];
    for (let i = 0; i < leaves.length; i++) {
      // 叶子节点的相邻节点
      temp = adj[leaves[i]].pop();
      // 在 temp 的邻接表中删除这个叶子节点
      for (let j = 0; j < adj[temp].length; j++) {
        if (adj[temp][j] === leaves[i]) {
          adj[temp].splice(j, 1);
          break;
        }
      }
      if (adj[temp].length === 1) {
        next.push(temp);
      }
    }
    leaves = next;
  }
  return leaves;
};
