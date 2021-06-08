// topics = ["数组"]

/**
 * HEAP
 * time O(n * nlogn), space O(1), n 为 stones 长度
 */
function lastStoneWeight(stones: number[]): number {
  stones.sort((a, b) => a - b);

  while (stones.length > 1) {
    const d = stones.pop()! - stones.pop()!;
    if (d) {
      stones.push(d);
      stones.sort((a, b) => a - b);
    }
  }

  return stones[0] ?? 0;
}
