/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
    let count = 0
    let flagArr = []
    for (let i = 2; i < n; i += 1) {
        if (flagArr[i] === undefined) {
            count += 1
            flagArr[i] = 1
            let j = 2
            while (i * j < n) {
                flagArr[i * j] = 0
                j += 1
            }
        }
    }
    return count
}
