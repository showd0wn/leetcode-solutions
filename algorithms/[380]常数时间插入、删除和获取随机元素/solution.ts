// topics = ["数组", "哈希表"]

class RandomizedSet {
  list: number[];
  map: Map<number, number>;
  constructor() {
    // 数组存储元素值
    this.list = [];
    // 哈希表存储存储值到索引的映射
    this.map = new Map();
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }

    this.list.push(val);
    this.map.set(val, this.list.length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) {
      return false;
    }

    const idx = this.map.get(val)!;
    const len = this.list.length;

    if (len > 1) {
      // 将待删除数，交换到数组的末尾
      [this.list[idx], this.list[len - 1]] = [this.list[len - 1], this.list[idx]];
      this.map.set(this.list[idx], idx);
    }

    this.list.pop();
    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
