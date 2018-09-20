/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {}
  const len = strs.length
  for (let i = 0; i < len; i++) {
    let s = strs[i].split('').sort().join()
    map[s] = map[s] ? [...map[s], strs[i]] : [strs[i]]
  }
  return Object.values(map)
}
