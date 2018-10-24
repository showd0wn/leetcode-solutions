/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  if (n == 0) return tasks.length
  let map = {}
  for(let i = 0; i < tasks.length; i++){
    let char = tasks[i]
    map[char] = (map[char] || 0) + 1
  }

  let maxKey = Object.keys(map).reduce((a, b) => map[a] > map[b] ? a : b)
  let maxValue = map[maxKey]

  let currCount = (maxValue-1)*n + maxValue
  let currSpace = (maxValue-1)* n

  for(let key in map){
    if (key == maxKey) continue
    else if (map[key] == maxValue && currSpace > 0){
      currSpace -= (maxValue - 1)
      currCount += 1
    }
    else if (currSpace > 0){
      currCount += Math.max(0, map[key] - currSpace)
      currSpace -= map[key]
    } else {
      currCount += map[key]
    }
  }

  return currCount
}
