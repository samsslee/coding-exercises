/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (head === null) {
        return head;
    }

    let flat = function(subhead) {
        let pt = subhead;
        let lastNode = pt; // Store the last processed node

        while (pt !== null) {
            if (pt.child !== null) {
                let nextNode = pt.next;
                let lastChild = flat(pt.child);
                pt.next = pt.child;
                pt.child.prev = pt;
                pt.child = null;
                lastChild.next = nextNode;

                if (nextNode !== null) {
                    nextNode.prev = lastChild;
                }

                lastNode = lastChild; // Update last processed node
            }

            lastNode = pt; // Update last processed node even if there's no child
            pt = pt.next;
        }

        return lastNode; // Return the last processed node
    };

    flat(head);

    return head;
};