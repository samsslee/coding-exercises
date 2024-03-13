# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
    
        dummy = ListNode()
        dummy.next = head

        pre = dummy
        cur = head
        
        while cur is not None:
            if cur.next is not None and cur.val == cur.next.val:
                while cur.next is not None and cur.val == cur.next.val:
                    cur = cur.next
                pre.next = cur.next
            else:
                pre = cur
            cur = cur.next
        
        return dummy.next
