// topics = ["回溯算法"]

function restoreIpAddresses(s: string): string[] {
  const n = s.length;
  const SEG_COUNT = 4;
  const segments = new Array<number>(SEG_COUNT);
  const res: string[] = [];

  const backtrack = (segId = 0, segStart = 0): void => {
    // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
    if (segId === SEG_COUNT) {
      if (segStart === n) {
        res.push(segments.join('.'));
      }
      return;
    }

    // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
    if (segStart === n) {
      return;
    }

    // 由于不能有前导零，如果当前数字为 0，那么这一段 IP 地址只能为 0
    if (s[segStart] == '0') {
      segments[segId] = 0;
      backtrack(segId + 1, segStart + 1);
    }

    // 一般情况，枚举每一种可能性并递归
    let addr = 0;
    for (let segEnd = segStart; segEnd < n; segEnd += 1) {
      addr = addr * 10 + Number(s[segEnd]);
      if (addr > 0 && addr <= 0xff) {
        segments[segId] = addr;
        backtrack(segId + 1, segEnd + 1);
      } else {
        break;
      }
    }
  };

  backtrack();
  return res;
}
