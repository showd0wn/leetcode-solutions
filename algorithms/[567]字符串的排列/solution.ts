// topics = ["滑动窗口"]

function checkInclusion(s1: string, s2: string): boolean {
  const m = s1.length;
  const n = s2.length;

  const cnt1: number[] = new Array(26).fill(0);
  const cnt2: number[] = new Array(26).fill(0);
  const offset = 'a'.codePointAt(0)!;

  for (let i = 0; i < m; i += 1) {
    cnt1[s1.codePointAt(i)! - offset] += 1;
    cnt2[s2.codePointAt(i)! - offset] += 1;
  }

  if (cnt1.join('') == cnt2.join('')) {
    return true;
  }

  for (let i = 1; i < n - m + 1; i += 1) {
    cnt2[s2.codePointAt(i + m - 1)! - offset] += 1;
    cnt2[s2.codePointAt(i - 1)! - offset] -= 1;

    if (cnt1.join('') == cnt2.join('')) {
      return true;
    }
  }

  return false;
}

// 可以用一个变量 diff 来记录 count1 和 count2 的不同值的个数
// 这样判断 count1 和 count2 是否相等就转换成了判断 diff 是否为 0
function checkInclusion2(s1: string, s2: string): boolean {
  const m = s1.length;
  const n = s2.length;

  const cnt: number[] = new Array(26).fill(0);
  const offset = 'a'.codePointAt(0)!;

  for (let i = 0; i < m; i += 1) {
    cnt[s1.codePointAt(i)! - offset] -= 1;
    cnt[s2.codePointAt(i)! - offset] += 1;
  }

  let diff = cnt.filter((i) => i != 0).length;

  if (diff == 0) {
    return true;
  }

  for (let i = 1; i < n - m + 1; i += 1) {
    // 进
    const x = s2.codePointAt(i + m - 1)! - offset;
    // 出
    const y = s2.codePointAt(i - 1)! - offset;

    if (x == y) {
      continue;
    }

    if (cnt[x] == 0) {
      diff += 1;
    }
    cnt[x] += 1;
    if (cnt[x] == 0) {
      diff -= 1;
    }
    if (cnt[y] == 0) {
      diff += 1;
    }
    cnt[y] -= 1;
    if (cnt[y] == 0) {
      diff -= 1;
    }

    if (diff == 0) {
      return true;
    }
  }

  return false;
}
