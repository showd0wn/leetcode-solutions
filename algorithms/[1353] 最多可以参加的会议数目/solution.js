/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  events.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  const startDay = Math.min(...events.flat());
  const endDay = Math.max(...events.flat());
  let result = 0;
  for (let day = startDay; day <= endDay; day += 1) {
    const index = events.findIndex(([start, end]) => start <= day && day <= end);
    if (index >= 0) {
      result += 1
      events.splice(index, 1);
      if (!events.length) break;
    }
  }

  return result;
};
