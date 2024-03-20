# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        #base case
        if head is None or head.next is None:
            return head

        andAbove = ListNode()
        below = ListNode()

        ptA = andAbove
        ptB = below
        pt = head

        while pt != None:
            if pt.val >= x:
                ptA.next = pt
                ptA = ptA.next
            else:
                ptB.next = pt
                ptB = ptB.next
            pt = pt.next

        ptB.next = andAbove.next
        ptA.next = None
        return below.next
