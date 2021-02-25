// topics = ["贪心算法"]

function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  const n = g.length;
  for (let i = 0; i < s.length; i += 1) {
    const idx = g.findIndex((x) => x <= s[i]);
    if (idx != -1) {
      g.splice(idx, 1);
    }
  }
  return n - g.length;
}
