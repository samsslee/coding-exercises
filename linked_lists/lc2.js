/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //make a dummy node to start off the results
    let dummy = new ListNode()
    let pre = dummy //pre pointer

    //define the carry over
    let carry = 0

    //add the nodes while at least one of the lists has nodes, adding the carry too
    //if the nodes add to more than 9, then make the next carry 1
    //make the current result node the mod10 of the sum

    while (l1 !=null || l2 !=null){
        //values
        let v1 = l1 != null ? l1.val : 0
        let v2 = l2 != null ? l2.val : 0
        let sum = v1 + v2 + carry
        carry = 0

        if (sum > 9){carry = 1}
        let curNode = new ListNode(sum % 10)

        pre.next = curNode
        pre = curNode
        l1 = l1 != null ? l1.next : null 
        l2 = l2 != null ? l2.next : null 
    }


    //make the previous node the current node

    //after the adding, current.next is going to be the last carry
    //increment the l1 and l2 pointers to the next ones

    if (carry == 1){
        let carry = new ListNode(1)
        pre.next = carry //use pre because curNode is only avail in the while
    }

    return dummy.next   

};