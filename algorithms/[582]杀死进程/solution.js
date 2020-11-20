/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
const killProcess = function(pid, ppid, kill) {
  const n = pid.length;
  const res = [];
  const queue = [kill];

  while (queue.length !== 0) {
    const cur = queue.shift();
    res.push(cur);
    for (let i = 0; i < n; i += 1) {
      if (ppid[i] === cur) {
        queue.push(pid[i]);
      }
    }
  }
  return res;
};

// DFS
const killProcess2 = function(pid, ppid, kill) {
  const n = pid.length;
  const res = [];

  const dfs = function(cur = kill) {
    res.push(cur);
    for (let i = 0; i < n; i += 1) {
      if (ppid[i] === cur) {
        dfs(pid[i]);
      }
    }
  };
  
  dfs();

  return res;
};

// HaskMap * BFS
const killProcess3 = function(pid, ppid, kill) {
  const n = pid.length;
  const map = new Map();
  for (let i = 0; i < n; i += 1) {
    let [cppid, cpid] = [ppid[i], pid[i]];
    if (map.has(cppid)) {
      map.get(cppid).push(cpid);
      // 不可取，会导致超时
      // map.set(cppid, [...map.get(cppid), cpid]);
    } else {
      map.set(cppid, [cpid]);
    }
  }

  const queue = [kill];
  const res = [];

  while (queue.length !== 0) {
    const tmp = queue.shift();
    res.push(tmp)
    if (map.has(tmp)) {
      queue.push(...map.get(tmp));
    }
  }

  return res;
};
