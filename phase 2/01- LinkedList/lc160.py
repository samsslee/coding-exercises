# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        if headA is None or headB is None:
            return None

        # generally it makes sense to start with pointers
        ptA = headA
        ptB = headB

        while(ptA != ptB):
            ptA = headB if ptA == None else ptA.next
            ptB = headA if ptB == None else ptB.next

        return ptA