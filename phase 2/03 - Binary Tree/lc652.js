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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let res = [], obj = {}
    // This Function will run one time for all nodes
    const recursive = (node, str) => {
        // Base Case for empty node
        if(!node) return '#'

        // Explanation for this is given below
        str += [node.val,recursive(node.left,str),recursive(node.right,str)].join()

        // If str is in object then increment else make it 1
        if(!obj[str]){
            obj[str] = 1
        }
        else {
            obj[str]++
            // This ensure that repeated node will push exactly once
            // If value > 2 then node already exist in res
            if(obj[str]===2) res.push(node)
        }

        // Return str
        return str
    }
    recursive(root,'')
    return res
};