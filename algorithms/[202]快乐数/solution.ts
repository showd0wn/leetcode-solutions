// topics = ["双指针"]

function isHappy(n: number): boolean {
  // 同 141.环形链表
  let slow = n;
  let fast = nextNum(n);
  while (fast != 1 && fast != slow) {
    slow = nextNum(slow);
    fast = nextNum(nextNum(fast));
  }
  return fast == 1;
}

function nextNum(num: number): number {
  let sum = 0;
  while (num > 0) {
    const temp = num % 10;
    sum += temp * temp;
    num = Math.floor(num / 10);
  }
  return sum;
}
