var isValidSudoku = function(board) {
  var ch

  for (var i = 0; i < 9; i++) {
    var rowNums = []
    var colNums = []
    var cubeNums = []

    for (var j = 0; j < 9; j++) {
      ch = board[i][j]
      if (ch !== '.') {
        if (rowNums.indexOf(ch) > -1) return false
        rowNums.push(ch)
      }

      ch = board[j][i]
      if (ch !== '.') {
        if (colNums.indexOf(ch) > -1) return false
        colNums.push(ch)
      } 
      
      var row = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      var col = i % 3 * 3 + j % 3
      ch = board[row][col]
      if (ch !== '.') {
        if (cubeNums.indexOf(ch) > -1) return false  
        cubeNums.push(ch)
      }
    }
  }
  return true
}
