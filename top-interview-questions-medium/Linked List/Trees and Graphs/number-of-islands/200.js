/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let total = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        search(i, j, grid)
        total++
      }
    }
  }
  return total
}

const search = (i, j, grid) => {
  if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[i].length - 1 || grid[i][j] === '0') {
    return
  }
  grid[i][j] = '0'
  search(i - 1, j, grid)
  search(i, j - 1, grid)
  search(i + 1, j, grid)
  search(i, j + 1, grid)
}
