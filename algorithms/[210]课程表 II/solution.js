/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 // 拓扑排序问题
 const findOrder = function(numCourses, prerequisites) {
   const arr = new Array(numCourses).fill(0);
   for (let i = 0; i < prerequisites.length; i += 1) {
     arr[prerequisites[i][0]] += 1;
    }

  // 广度优先搜索 BFS
  const queue = [];
  for (let i = 0; i < numCourses; i += 1) {
    if (arr[i] === 0) {
      queue.push(i);
    }
  }

  const res = [];
  while (queue.length !== 0) {
    const tmp = queue.shift();
    res.push(tmp);
    for (let i = prerequisites.length - 1; i >= 0; i -= 1) {
      const item = prerequisites[i];
      if (item[1] === tmp) {
        prerequisites.splice(i, 1);
        arr[item[0]] -= 1;
        if (arr[item[0]] === 0) {
          queue.push(item[0]);
        }
      }
    }
  }

  return res.length === numCourses ? res : [];
};
