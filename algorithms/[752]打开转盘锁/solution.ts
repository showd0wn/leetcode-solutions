// topics = ["广度优先搜索", "哈希表", "字符串"]

function openLock(deadends: string[], target: string): number {
  const start = '0000';
  if (target == start) {
    return 0;
  }

  const dead = new Set<string>(deadends);
  if (dead.has(start)) {
    return -1;
  }

  let step = 0;
  const queue = [start];
  const seen = new Set<string>();
  seen.add(start);

  while (queue.length) {
    step += 1;
    const size = queue.length;
    for (let i = 0; i < size; i += 1) {
      const status = queue.shift()!;
      for (const nextStatus of get(status)) {
        if (!seen.has(nextStatus) && !dead.has(nextStatus)) {
          if (nextStatus === target) {
            return step;
          }
          queue.push(nextStatus);
          seen.add(nextStatus);
        }
      }
    }
  }

  return -1;
}

const numPrev = (x: string): string => {
  return x === '0' ? '9' : parseInt(x) - 1 + '';
};

const numSucc = (x: string): string => {
  return x === '9' ? '0' : parseInt(x) + 1 + '';
};

// 枚举 status 通过一次旋转得到的数字
const get = (status: string): string[] => {
  const ret = [];
  const array = Array.from(status);
  for (let i = 0; i < 4; i += 1) {
    const num = array[i];
    array[i] = numPrev(num);
    ret.push(array.join(''));
    array[i] = numSucc(num);
    ret.push(array.join(''));
    array[i] = num;
  }

  return ret;
};
