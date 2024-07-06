/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root == null){return null}
    //base case - if the first top most root is either p or q then obvs that's the LCA
    if (root == p || root == q){
        return root
    }

    //otherwise look into the left tree first, then the right tree.
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    //at every junction, if there is a left and a right, then we return the common root
    //if there is only a left, then either everything is in the left, or we haven't found the right
    //vice versa for right

    if (left !== null && right !== null){
        return root
    }else if(left !== null){
        return left
    }
    return right

};