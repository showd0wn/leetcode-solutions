// topics = ["设计", "二分查找"]

class MedianFinder {
  list: number[];
  constructor() {
    this.list = [];
  }

  addNum(num: number): void {
    if (this.list.length == 0) {
      this.list.push(num);
    } else {
      this.list.splice(this.binarySearch(num), 0, num);
    }
  }

  findMedian(): number {
    const n = this.list.length;
    return (this.list[Math.floor((n - 1) / 2)] + this.list[Math.ceil((n - 1) / 2)]) / 2;
  }

  binarySearch(num: number): number {
    const n = this.list.length;

    let left = 0;
    let right = n;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.list[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // [left, right] 里一定存在插入元素的位置
    // 且退出循环的时候一定有 left == right 成立，因此返回 left 或者 right 均可
    return left;
  }
}

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/
