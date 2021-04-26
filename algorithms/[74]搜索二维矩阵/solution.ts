// topics = ["数组", "二分查找"]

// 二分查找标准写法 69.x 的平方根
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  let low = 0;
  let high = m;
  // 退出循环时 low == high，指向 target 的插入位置
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    // 若 target 已存在，插入点在已存在元素右侧，等价于 bisect.bisect_right
    if (matrix[mid][0] <= target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  if (low == 0) {
    return false;
  }

  let left = 0;
  let right = n;
  // 退出循环时 low == high，指向 target 的插入位置
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // 若 target 已存在，插入点在已存在元素左侧，等价于 bisect.bisect_left
    if (matrix[low - 1][mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return matrix[low - 1][left] == target;
}
