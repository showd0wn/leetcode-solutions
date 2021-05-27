// topics = ["位运算", "字典树"]

export class Trie {
  left?: Trie;
  right?: Trie;
  constructor() {
    // left 代表 0，right 代表 1
    this.left = undefined;
    this.right = undefined;
  }
}

/**
 * Bit Manipulation & Trie
 * time O(nlogC), space O(nlogC), n 为 nums 长度, C 为数组中数据范围, 本题中 C < 2 ^ 31
 */
function findMaximumXOR(nums: number[]): number {
  const root = new Trie();
  let res = 0;

  // 建立字典树
  for (let i = 0; i < nums.length; i += 1) {
    let node = root;
    for (let k = 30; k >= 0; k -= 1) {
      // 左移 k 位
      const bit = (nums[i] >> k) & 1;
      if (bit == 0) {
        if (!node.left) {
          node.left = new Trie();
        }
        node = node.left;
      } else if (bit == 1) {
        if (!node.right) {
          node.right = new Trie();
        }
        node = node.right;
      }
    }
    check(nums[i]);
  }

  // 遍历字典树求最大可能的值
  function check(num: number) {
    let node = root;
    let tmp = 0;
    for (let k = 30; k >= 0; k -= 1) {
      const bit = (num >> k) & 1;
      if (bit == 0) {
        if (node.right) {
          node = node.right;
          tmp = tmp * 2 + 1;
        } else {
          node = node.left!;
          tmp = tmp * 2;
        }
      } else if (bit == 1) {
        if (node.left) {
          node = node.left;
          tmp = tmp * 2 + 1;
        } else {
          node = node.right!;
          tmp = tmp * 2;
        }
      }
      res = Math.max(tmp, res);
    }
  }

  return res;
}
