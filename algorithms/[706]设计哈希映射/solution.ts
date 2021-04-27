// topics = ["设计", "哈希表"]

class MyHashMap {
  base: number;
  data: number[][][];
  constructor() {
    // 哈希表的大小，素数可以减少规律数据源的影响
    this.base = 769;
    this.data = new Array(this.base).fill(0).map(() => new Array<number[]>());
  }

  // 哈希函数,将集合中任意可能的元素映射到一个固定范围的整数值
  hash(key: number): number {
    return key % this.base;
  }

  put(key: number, value: number): void {
    const h = this.hash(key);
    const it = this.data[h];
    for (const ele of it) {
      if (ele[0] === key) {
        ele[1] = value;
        return;
      }
    }
    it.push([key, value]);
  }

  get(key: number): number {
    const h = this.hash(key);
    const it = this.data[h];
    for (const ele of it) {
      if (ele[0] === key) {
        return ele[1];
      }
    }
    return -1;
  }

  remove(key: number): void {
    const h = this.hash(key);
    const it = this.data[h];
    for (const [idx, ele] of it.entries()) {
      if (ele[0] === key) {
        it.splice(idx, 1);
        return;
      }
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
