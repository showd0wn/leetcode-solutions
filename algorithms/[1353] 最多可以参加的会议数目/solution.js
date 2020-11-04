/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  const len = events.length;
  const days = new Set();

  events.forEach(([start, end]) => {
    for (let i  = start; i <= end; i += 1) {
      if (days.has(i)) continue;
      console.log(2, i)
      days.add(i);
    }
  });

  console.log(Math.min(len, days.size))
  return Math.min(len, days.size);
};

// maxEvents([[1,2],[2,3],[3,4],[1,2]])

// maxEvents([[1,4],[4,4],[2,2],[3,4],[1,1]])

// maxEvents([[1,100000]])

maxEvents([[1,2],[1,2],[1,6],[1,2],[1,2]])