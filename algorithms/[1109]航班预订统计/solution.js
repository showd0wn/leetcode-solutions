/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
const corpFlightBookings = function(bookings, n) {
  // 乘车问题 前缀和
  const res = new Array(n).fill(0);
  for (let i = 0; i < bookings.length; i += 1) {
    const [start, end, count] = bookings[i];
    res[start - 1] += count;
    if (end < n) {
      res[end] -= count;
    }
  }

  for (let i = 1; i < n; i += 1) {
    res[i] += res[i - 1];
  }

  return res;
};
