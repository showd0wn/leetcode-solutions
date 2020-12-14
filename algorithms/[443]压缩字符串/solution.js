/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function(chars) {
  const len = chars.length;
  let count = 0;
  let lastChar = '';

  for (let i = len - 1; i >= 0; i -= 1) {
    const char = chars[i];
    if (char !== lastChar) {
      if (count > 1) {
        chars.splice(i + 1, count, lastChar, ... String(count).split(''));
      }
  
      count = 1;
      lastChar = char;
    } else if (i === 0) {
      count += 1;
      chars.splice(0, count, char, ... String(count).split(''));
    } else {
      count += 1;
    }
  }

  return chars.length;
};
