/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head

    while (fast && fast.next && fast.next.next){ //do the regular fast & slow method until they meet
        slow = slow.next
        fast = fast.next.next

        if(slow === fast){ //when they do meet, the distance between the node they meet (M) and the beginning of the cycle (B)
            //is the same as the distance between the head (H) and the beginning of the cycle (B). so use that to find by inc both pointers one at a time
            slow = head;

            while (slow !==fast){
                slow = slow.next
                fast = fast.next
            }

            return slow

        }
    }

    return null
};