// topics = ["设计", "队列"]

// time O(1)
class MyCircularQueue {
  // 循环队列
  queue: number[];
  // 循环队列的容量
  capacity: number;
  // 循环队列队首索引
  headIndex: number;
  // 循环队列当前的长度
  count: number;
  constructor(k: number) {
    this.queue = [];
    this.capacity = k;
    this.headIndex = 0;
    this.count = 0;
  }

  enQueue(value: number): boolean {
    if (this.count == this.capacity) {
      return false;
    }
    this.queue[(this.headIndex + this.count) % this.capacity] = value;
    this.count += 1;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.headIndex = (this.headIndex + 1) % this.capacity;
    this.count -= 1;
    return true;
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.headIndex];
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[(this.headIndex + this.count - 1) % this.capacity];
  }

  isEmpty(): boolean {
    return this.count == 0;
  }

  isFull(): boolean {
    return this.count == this.capacity;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
