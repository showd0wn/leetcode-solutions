// topics = ["树"]

#include <stdbool.h>

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct TreeNode
{
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

/**
 * time O(1), space O(1)
 */
bool checkTree(struct TreeNode *root)
{
    return root->val == root->left->val + root->right->val;
}