// topics = ["字符串"]

function addStrings(num1: string, num2: string): string {
  let n = num1.length - 1;
  let m = num2.length - 1;
  let res = '';
  let carry = 0;

  while (n >= 0 || m >= 0) {
    const first = n >= 0 ? parseInt(num1[n--]) : 0;
    const second = m >= 0 ? parseInt(num2[m--]) : 0;
    const val = first + second + carry;
    carry = Math.floor(val / 10);
    res = (val % 10) + res;
  }
  return carry ? carry + res : res;
}
