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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    if (root === null) return false;
    //use dfs
    let results = new Set([])

    const countDown = (node, targetSum) =>{
        targetSum -= node.val

        if (node.left == null && node.right == null){
            results.add(targetSum)
            return
        }

        if (node.left != null) {
            countDown(node.left, targetSum)
        }
        if (node.right != null){
            countDown(node.right, targetSum)
        }

    }

    countDown(root, targetSum);

    return results.has(0);

};