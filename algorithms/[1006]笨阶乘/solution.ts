// topics = ["数学"]

function clumsy(N: number): number {
  if (N == 1) {
    return 1;
  }
  if (N == 2) {
    return 2;
  }
  if (N == 3) {
    return 6;
  }
  if (N == 4) {
    return 7;
  }

  // 当 N > 4 时，可以根据 N 对 4 取模的余数进行分类讨论
  if (N % 4 == 0) {
    return N + 1;
  }
  if (N % 4 == 3) {
    return N - 1;
  }
  return N + 2;
}
