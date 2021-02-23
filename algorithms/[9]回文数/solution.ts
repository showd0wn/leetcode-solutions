// topics = ["数学"]

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let n = x;
  let y = 0;
  while (n) {
    y = y * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return x == y;
}
