/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  if (n === 2) return edges[0];

  const res = Array.from({ length: n }, (_, i) => i);
  while (res.length > 2) {
    // 记录节点出度
    const list = [];
    edges.flat().forEach(node => {
      if (list[node] === undefined) {
        list[node] = 1;
      } else {
        list[node] = list[node] + 1;
      }
    });

    // 记录叶子节点
    const leafs = [];
    list.forEach((v, i) => {
      if (v === 1) {
        leafs.push(i);
      }
    });

    for (let i = res.length - 1; i >= 0; i -= 1) {
      if (leafs.includes(res[i])) {
        res.splice(i, 1);
      }
    }

    for (let j = edges.length - 1; j >= 0; j -= 1) {
      const [start, end] = edges[j];
      if (leafs.includes(start) || leafs.includes(end)) {
        edges.splice(j, 1);
      }
    }
  }

  return res;
};
