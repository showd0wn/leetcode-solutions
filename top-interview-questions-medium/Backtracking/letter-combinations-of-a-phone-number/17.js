/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits, current = '', result = []) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  if (!digits.length && !current) return result
  if (!digits.length) return result.push(current)
  for (let letter of map[digits[0]]) {
    letterCombinations(digits.slice(1), current + letter, result)
  }

  return result
}
