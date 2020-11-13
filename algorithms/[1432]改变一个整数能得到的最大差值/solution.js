/**
 * @param {number} num
 * @return {number}
 */
const maxDiff = function(num) {
  return getMaxNum(num) - getMinNum(num);
};

const getMaxNum = function(num) {
  const array = num.toString().split('');

  const x = array.find(v => v !== '9') || '9';
  const y = '9';

  const result = array.map(v => v === x ? y : v).join('');

  return Number(result);
}

const getMinNum = function(num) {
  const array = num.toString().split('');

  let x = array[0];
  let y = '1';

  if (array[0] === '1') {
    x = array.find((v, i) => i > 0 && v !== '0' && v !== '1') || '0';
    y = '0';
  }

  const result = array.map(v => v === x ? y : v).join('');

  return Number(result);
}
