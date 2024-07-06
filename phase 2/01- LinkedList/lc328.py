# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:

        if head == None or head.next == None:
            return head

        oddHead = head
        evenHead = head.next

        oddCur = oddHead
        evenCur = evenHead

        while oddCur.next is not None and evenCur.next is not None:

            oddCur.next = evenCur.next
            oddCur = oddCur.next

            evenCur.next = oddCur.next
            evenCur = evenCur.next

        oddCur.next = evenHead

        return oddHead