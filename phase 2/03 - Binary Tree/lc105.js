/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let hm = {}
    let n = inorder.length
    let index = 0

    for (let i = 0; i<n; i++){
        hm[inorder[i]] = i
    }

    let dfs = function(s, e){
        //base case
        if (s>e){
            return null
        }

        //build tree node
        let curNode = preorder[index++]
        let root = new TreeNode(curNode)

        let mid = hm[curNode]

        //build left subtree
        root.left = dfs(s,mid-1)

        //build right subtree
        root.right = dfs(mid+1, e)

        //return node
        return root


    }    
    
    let root = dfs(0, n-1)
    return root


};