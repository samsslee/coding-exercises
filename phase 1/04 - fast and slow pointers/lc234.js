/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head
    let fast = head

   //find the end and middle
   while (fast && fast.next){
       slow = slow.next
       fast = fast.next.next
   }

   //middle is found, now we reverse the back end of the list
   //using the mid node we just found (or the second mid node for even numbers)

   function reverse(head){
       let prev = null
       let curr = head

       while (curr){
           let next = curr.next
           curr.next = prev
           prev = curr
           curr = next
       }

       return prev
   }

   let rev = reverse(slow)

   while (rev){
       if (head.val !== rev.val){
           return false
       }
       head = head.next
       rev = rev.next
   }

   return true

};