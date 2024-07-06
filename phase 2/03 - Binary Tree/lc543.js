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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    const findmaxheight = (node, maxD) =>{
        if (!node) return 0;

        const left = findmaxheight(node.left, maxD)
        const right = findmaxheight(node.right, maxD)

        maxD[0] = Math.max(maxD[0], left+right)

        return Math.max(left, right)+1

    }

    const maxD = [0]

    findmaxheight(root, maxD)

    return maxD[0]

};