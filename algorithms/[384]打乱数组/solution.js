/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums || [];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let random = [];
    let numsCopy = [...this.nums];
    while(numsCopy.length > 0) {
        let index = Math.floor(Math.random() * numsCopy.length);
        random.push(numsCopy[index]);
        numsCopy.splice(index, 1);
    }
    return random;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */