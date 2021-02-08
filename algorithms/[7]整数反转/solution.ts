// topics = ["数学"]

function reverse(x: number): number {
  const limit = 2 ** 31;

  let ord = Math.abs(x);
  let now = 0;

  while (ord > 0) {
    now = now * 10 + (ord % 10);
    ord = Math.floor(ord / 10);
  }

  if (x > 0) {
    return now < limit ? now : 0;
  }
  return now <= limit ? 0 - now : 0;
}
