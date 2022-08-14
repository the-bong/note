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
  let result = true;
  function helper(node) {
    if (node.left) {
      if (node.val <= node.left.val) {
        result = false;
      }
      helper(node.left);
    }
    if (node.right) {
      if (node.val >= node.right.val) {
        result = false;
      }
      helper(node.right);
    }
  };
  
  if (root) {
    helper(root);  
  }
  
  return result;
};