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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    
    let output = []

    var buildarray = function(root){
        if(root == null) {
            return
        }

        buildarray(root.left)
        output.push(root.val)
        buildarray(root.right)
    }

    buildarray(root)

    return output

};