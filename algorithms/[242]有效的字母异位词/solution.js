/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    const helper = str => str.split('').sort().join('');
    return helper(s) === helper(t);
};
