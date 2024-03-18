"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""

class Solution:
    def flatten(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if head is None:
            return head
        
        def flat(subhead):
            #keep a pointer on the current subhead
            pt = subhead
            #keep a pointer on what's the new tail
            lastNode = pt

            #enter main loop to explore depth
            while pt is not None:
                #if you see there is a child, explore and reassign
                if pt.child is not None:
                    #keep track of the current nextNode
                    nextNode = pt.next
                    lastChild = flat(pt.child) #look for the lastNode of that child

                    #cleanup
                    pt.next = pt.child
                    pt.child.prev = pt
                    pt.child = None
                    lastChild.next = nextNode
                    
                    if nextNode is not None:
                        nextNode.prev = lastChild

                #otherwise scoot along
                #record current potential last node
                lastNode = pt
                pt = pt.next
            
            return lastNode
        
        flat(head)
        return head
