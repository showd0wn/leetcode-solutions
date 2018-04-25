/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// recursively
var levelOrder = function(root) {
  var result = []
  var helper = function(node, level) {
    if (!node) return
    if (result.length <= level) result.push([])
    result[level].push(node.val)
    helper(node.left, level + 1)
    helper(node.right, level + 1)
  }
  helper(root, 0)
  return result
};

// recursively
var levelOrder = function(root) {
  var result = []
  var levelNodes = [root]
  if(root == null) return result;

  while (levelNodes.length) {
    result.push(levelNodes.map(item => {
      if (item) return item.val
    }))
    
    var nextLevelNodes = [];
    for(var node of levelNodes){
      if(node && node.left) nextLevelNodes.push(node.left);
      if(node && node.right) nextLevelNodes.push(node.right);
    }

    levelNodes = nextLevelNodes;
  }
  return result
}
