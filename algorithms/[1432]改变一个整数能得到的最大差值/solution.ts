// topics = ["字符串", "贪心算法"]

function maxDiff(num: number): number {
  const nums = String(num).split('');

  const x = nums.find(ch => ch != '9');
  const a = nums.map(ch => (ch == x ? '9' : ch));

  const y = nums.find((ch, i) => (i == 0 ? ch != '1' : ch != '0' && ch != '1'));
  const b = nums.map(ch => (ch == y ? (nums[0] == y ? '1' : '0') : ch));

  return Number(a.join('')) - Number(b.join(''));
}
