/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    
    //base case
    if(head.next == null){return head}
    if(k == 1){return head}

    //define pre and cur pointers
    let dummy = new ListNode(null, head)
    let pre = dummy
    let cur = head

    let checkHasSpace = function(k, cur){
        for(let i = 1; i<=k; i++){
            if (cur == null){return false}
            cur = cur.next
        }
    return true
    }


    let reverse = function(pre, cur, k){
        for(let i=0; i<k-1; i++){
            let next = cur.next
            cur.next = next.next
            next.next = pre.next
            pre.next = next
        }
        return cur
    }


    //traverse the list
    while (cur != null){
        let hasSpace = checkHasSpace(k, cur)
        if (hasSpace){
            pre = reverse(pre, cur, k) //tail node
            cur = pre.next
        } else {
            break
        }
    }
    return dummy.next

};