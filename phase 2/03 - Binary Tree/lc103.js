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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let output = [];

if (root == null) {
    return output;
}

let queue = [root];
let isLeftToRight = true

while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
        let currentNode = queue.shift();

        if (isLeftToRight){
            currentLevel.push(currentNode.val);
        } else {
            currentLevel.unshift(currentNode.val);
        }

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    output.push(currentLevel);
    isLeftToRight = !isLeftToRight
}

return output;
};