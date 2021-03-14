// topics = ["哈希表"]

// 链地址法
class MyHashSet {
  base: number;
  data: number[][];
  constructor() {
    // 哈希表的大小，素数可以减少规律数据源的影响
    this.base = 769;
    // 数组的每个位置是一个链表，相同哈希值的元素都放入这一链表当中
    this.data = new Array(this.base).fill(0).map(() => new Array());
  }

  // 哈希函数,将集合中任意可能的元素映射到一个固定范围的整数值
  hash(key: number): number {
    return key % this.base;
  }

  add(key: number): void {
    const h = this.hash(key);
    for (const element of this.data[h]) {
      if (element === key) {
        return;
      }
    }
    // 冲突处理
    this.data[h].push(key);
  }

  remove(key: number): void {
    const h = this.hash(key);
    const it = this.data[h];
    for (const [idx, val] of it.entries()) {
      if (val === key) {
        it.splice(idx, 1);
        return;
      }
    }
  }

  contains(key: number): boolean {
    const h = this.hash(key);
    for (const element of this.data[h]) {
      if (element === key) {
        return true;
      }
    }
    return false;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
