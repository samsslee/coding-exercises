/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let hm = {}
let n = inorder.length
let index = 0

for (let i = 0; i<n; i++){
    hm[inorder[i]] = i
}

postorder = postorder.reverse()

let dfs = function(s, e){
    //base case
    if (s>e){
        return null
    }

    //build tree node
    let curNode = postorder[index++]
    let root = new TreeNode(curNode)

    let mid = hm[curNode]

    //build right subtree
    root.right = dfs(mid+1, e)

    //build left subtree
    root.left = dfs(s,mid-1)


    //return node
    return root


}    

let root = dfs(0, n-1)
return root
};