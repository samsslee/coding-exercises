/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {

    if (root == null) {
        return null;
    }

    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let tempHead = new Node()
        let prev = tempHead

        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            prev.next = currentNode

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }

            prev = currentNode
        }

        prev.next = null

    }

    return root;
};