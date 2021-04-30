// topics = ["数学"]

/**
 * 判断斜率
 * time O(n), space O(1), n 为数组长度
 */
function checkStraightLine(coordinates: number[][]): boolean {
  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];

  // 判断是否斜率为 0
  if (coordinates.every(([x, _]) => x === x1)) {
    return true;
  }

  const a = (y1 - y0) / (x1 - x0);
  const b = y0 - a * x0;

  return coordinates.every(([x, y]) => y === a * x + b);
}
