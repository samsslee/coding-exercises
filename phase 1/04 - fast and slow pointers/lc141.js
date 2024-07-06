/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visitedNodes = new Set()
    let currentNode = head;

    while (currentNode != null){
        if (visitedNodes.has(currentNode)){
            return true;
        }

        visitedNodes.add(currentNode)
        currentNode = currentNode.next
    }

    return false;

    
};