// topics = ["递归"]

function decodeString(s: string): string {
  if (/^[a-zA-Z]+$/.test(s)) {
    return s;
  }

  // 分组匹配
  const t = s.replace(/(\d+)\[(\w+)\]/g, (_, p1, p2) => p2.repeat(p1));

  return decodeString(t);
}
