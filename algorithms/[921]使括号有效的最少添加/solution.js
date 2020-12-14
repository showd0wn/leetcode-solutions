/**
 * @param {string} S
 * @return {number}
 */
const minAddToMakeValid = function(S) {
  const reg = /\(\)/g;
  let str = S;

  while(str.match(reg)) {
    str = str.replace(reg, '');
  }

  return str.length;
};
