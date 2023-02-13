// topics = ["树", "深度优先搜索", "递归"]

import java.util.LinkedList;
import java.util.Deque;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    /**
     * DFS
     * space O(n), time O(n), n 为二叉树节点数
     */
    public boolean btreeGameWinningMove(TreeNode root, int n, int x) {
        TreeNode node = find(root, x);
        int half = n / 2;

        int leftNum = count(node.left);
        if (leftNum > half) {
            return true;
        }

        int rightNum = count(node.right);
        if (rightNum > half) {
            return true;
        }

        return (n - leftNum - rightNum - 1) > half;
    }

    public TreeNode find(TreeNode root, int x) {
        Deque<TreeNode> s = new LinkedList<>();
        TreeNode it = root;

        while (it != null || s.size() != 0) {
            while (it != null) {
                if (it.val == x) {
                    return it;
                }
                s.push(it);
                it = it.left;
            }
            it = s.pop();
            it = it.right;
        }

        return null;
    }

    public int count(TreeNode root) {
        if (root == null) {
            return 0;
        }
        return count(root.left) + count(root.right) + 1;
    }
}