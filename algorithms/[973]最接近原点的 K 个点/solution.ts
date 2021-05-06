/**
 * 排序
 * time O(nlogn), space O(logn), n 为 points 的长度
 */
function kClosest(points: number[][], k: number): number[][] {
  points.sort(([x1, y1], [x2, y2]) => {
    return x1 * x1 + y1 * y1 - x2 * x2 - y2 * y2;
  });

  return points.slice(0, k);
}
