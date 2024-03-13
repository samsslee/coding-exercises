# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        pre = dummy

        carry = 0

        while (l1 != None or l2 !=None):
            v1 = l1.val if l1 != None else 0
            v2 = l2.val if l2 != None else 0
            sum = v1 + v2 + carry
            carry = 0

            if sum > 9:
                carry = 1 
            curNode = ListNode(sum % 10)
        
            pre.next = curNode
            pre = curNode
            l1 = l1.next if l1 != None else None
            l2 = l2.next if l2 != None else None

        if carry == 1: 
            curNode = ListNode(1)
            pre.next = curNode
        
        return dummy.next