// topics = ["设计", "哈希表", "链表"]

class linkedListNode {
  key: number;
  val: number;
  prev: linkedListNode | null;
  next: linkedListNode | null;
  constructor(
    key: number = 0,
    val: number = 0,
    prev: linkedListNode | null = null,
    next: linkedListNode | null = null,
  ) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

// 双向链表
class linkedList {
  // 伪头节点
  start: linkedListNode;
  // 伪尾节点
  end: linkedListNode;
  // 链表长度
  size: number;
  constructor() {
    this.start = new linkedListNode();
    this.end = new linkedListNode();
    this.start.next = this.end;
    this.end.prev = this.start;
    this.size = 0;
  }
  // 删除节点
  delete(node: linkedListNode): void {
    node.next!.prev = node.prev;
    node.prev!.next = node.next;

    this.size -= 1;
  }
  // 添加尾节点
  append(node: linkedListNode): void {
    node.prev = this.end.prev;
    node.next = this.end;

    this.end.prev = node;
    node.prev!.next = node;

    this.size += 1;
  }
  // 删除头节点
  shift(): linkedListNode {
    const head = this.start.next!;
    this.delete(head);

    return head;
  }
}

class LRUCache {
  capacity: number;
  map: Map<number, linkedListNode>;
  list: linkedList;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.list = new linkedList();
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key)!;
    // 通过哈希表定位到该节点在双向链表中的位置，并将其移动到双向链表的尾部（先删除后添加）
    this.list.delete(node);
    this.list.append(node);

    return node.val;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      // 如果 key 存在，删除链表中对应节点
      this.list.delete(this.map.get(key)!);
    } else if (this.list.size == this.capacity) {
      // 如果 key 不存在且容量已满，删除链表头节点以及对应 map 中数据
      this.map.delete(this.list.shift().key);
    }

    const newNode = new linkedListNode(key, value);
    // 在链表尾部添加新节点，并更新 map
    this.list.append(newNode);
    // 更新 map
    this.map.set(key, newNode);
  }
}

// 解法二 利用 Map 有序，遍历顺序即插入顺序
class LRUCache2 {
  size: number;
  capacity: number;
  map: Map<number, number>;
  constructor(capacity: number) {
    this.size = 0;
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1;
    }

    const val = this.map.get(key)!;
    this.map.delete(key);
    this.map.set(key, val);

    return val;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      this.map.delete(key);
      this.map.set(key, value);
      return;
    }

    if (this.size == this.capacity) {
      this.map.delete(this.map.keys().next().value);
      this.size -= 1;
    }

    this.map.set(key, value);
    this.size += 1;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
