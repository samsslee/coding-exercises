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
var oddEvenList = function(head) {
    
    if(head == null || head.next == null){return head}
    let oddHead = head
    let evenHead = head.next

    let oddCur = oddHead
    let evenCur = evenHead

    while (oddCur.next != null && evenCur.next != null){
        oddCur.next = evenCur.next
        oddCur = oddCur.next

        evenCur.next = oddCur.next
        evenCur = evenCur.next
    }

    oddCur.next = evenHead

    return oddHead


};