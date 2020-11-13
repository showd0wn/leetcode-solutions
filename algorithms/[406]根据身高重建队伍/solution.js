/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function(people) {
  if (!people || !people.length) return [];

  const res = [];

  people.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
  }).forEach(item => res.splice(item[1], 0, item));

  return res;
};
