/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (!intervals.length) return []
  intervals.sort((a, b) => a.start - b.start)

  const result = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i]
    let last = result[result.length - 1]
    if (curr.start > last.end) {
      result.push(curr)
    } else if (curr.end >= last.end) {
      last.end = curr.end
    }
  }
  return result
}
