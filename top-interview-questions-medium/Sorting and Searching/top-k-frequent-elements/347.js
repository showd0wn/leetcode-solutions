/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = {}
  for (let i of nums) {
    map[i] = map[i] !== undefined ? map[i] + 1 : 1
  }

  let list = []
  for (let i in map) {
    if (list[map[i]] !== undefined) {
      list[map[i]].push(Number(i))
    } else {
      list[map[i]] = [Number(i)]
    }
  }

  let res = []
  while (res.length < k) {
    let v = list.pop()
    if (v == undefined) continue
    res = res.concat(v)
  }
  return res
}
