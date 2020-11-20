/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 // 拓扑排序问题
const canFinish = function(numCourses, prerequisites) {
  const indeg = new Array(numCourses).fill(0);
  prerequisites.forEach(([course, _]) => {
    indeg[course] += 1;
  });

   // 广度优先搜索 BFS
  const queue = [];
  indeg.forEach((v, i) => {
    if (v === 0) {
      queue.push(i);
    }
  });

  let count = 0;
  while (queue.length !== 0) {
    const cur = queue.shift();
    count += 1;

    for (let edge of prerequisites) {
      if (edge[1] === cur) {
        indeg[edge[0]] -= 1;
        if (indeg[edge[0]] === 0) {
          queue.push(edge[0]);
        }
      }
    }
  }

  return count === numCourses;
};
