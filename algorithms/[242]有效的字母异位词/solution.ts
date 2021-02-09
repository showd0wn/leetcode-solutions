// topics = ["字符串", "哈希表"]

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const map: Map<string, number> = new Map();

  for (const c of s) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  for (const c of t) {
    const count = map.get(c) ?? 0;
    if (count < 1) {
      return false;
    }
    map.set(c, count - 1);
  }

  return true;
}
