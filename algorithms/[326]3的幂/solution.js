/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
  return /^10*$/.test(n.toString(3));
};
