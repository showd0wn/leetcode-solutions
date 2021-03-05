// topics = ["栈"]

class MyQueue {
  inStack: number[];
  outStack: number[];
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    if (!this.outStack.length) {
      this.in2out();
    }
    return this.outStack.pop()!;
  }

  peek(): number {
    if (!this.outStack.length) {
      this.in2out();
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return this.outStack.length === 0 && this.inStack.length === 0;
  }

  in2out(): void {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop()!);
    }
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
