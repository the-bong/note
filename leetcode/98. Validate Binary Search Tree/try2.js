class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}
 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  function helper(node, min, max) {
    if (!node) return true;

    if (min && min.val >= node.val) return false;
    if (max && max.val <= node.val) return false;

    return helper(node.left, min, node) && helper(node.right, node, max);
  }
  return helper(root, null, null);
};

export {isValidBST, TreeNode};
