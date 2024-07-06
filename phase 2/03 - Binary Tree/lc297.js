/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root == null) {
        return "[]";
    }

    let queue = [root];
    let serialized = [];

    while (queue.length > 0) {
        let node = queue.shift();
        if (node !== null) {
            serialized.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            serialized.push(null);
        }
    }

    // Remove trailing nulls to optimize the output
    while (serialized[serialized.length - 1] === null) {
        serialized.pop();
    }

    return serialized;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === "[]") {
        return null;
    }

    let root = new TreeNode(data[0]);
    let queue = [root];
    let index = 1;

    while (queue.length > 0) {
        let node = queue.shift();

        if (index < data.length && data[index] !== null) {
            node.left = new TreeNode(data[index]);
            queue.push(node.left);
        }
        index++;

        if (index < data.length && data[index] !== null) {
            node.right = new TreeNode(data[index]);
            queue.push(node.right);
        }
        index++;
    }

    return root;
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */