// topics = ["哈希表"]

function numRabbits(answers: number[]): number {
  const counter = new Map<number, number>();
  for (const ans of answers) {
    counter.set(ans, (counter.get(ans) ?? 0) + 1);
  }

  let ans = 0;
  for (const [k, v] of counter.entries()) {
    ans += Math.ceil(v / (k + 1)) * (k + 1);
  }

  return ans;
}
