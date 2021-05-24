// topics = ["位运算", "数组"]

/**
 * 位运算 & 前缀异或
 * time O(n + m), space O(n), n 和 m 分别为 arr 和 queries 的长度
 */
function xorQueries(arr: number[], queries: number[][]): number[] {
  const preXor = [0];

  for (const num of arr) {
    preXor.push(preXor[preXor.length - 1] ^ num);
  }

  return queries.map(([i, j]) => preXor[i] ^ preXor[j + 1]);
}
