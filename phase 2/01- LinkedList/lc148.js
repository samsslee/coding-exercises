/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    //divide and conquer, merge sort.

    if (head == null || head.next == null){return head}

    let l1 = head
    let l2 = splitNodeMid(head)

    l1 = sortList(l1)
    l2 = sortList(l2)

    //merge the two sorted lists together
    let temphead = new ListNode()
    let current = temphead

    while(l1 !=null && l2 != null){
        if(l1.val < l2.val){
            current.next = l1
            l1 = l1.next
        } else{
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }

    if (l2 != null){
        current.next = l2
    } else {
        current.next = l1
    }

    return temphead.next
};

var splitNodeMid = function(head){
    let slow = head
    let fast = head
    let pre = null

    while (fast !=null && fast.next !=null){
        pre = slow
        slow = slow.next
        fast = fast.next.next
    }

    pre.next = null
    return slow
}