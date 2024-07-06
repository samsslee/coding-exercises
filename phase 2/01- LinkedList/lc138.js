/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    //base case
    if (head == null){return null} //not returning head of course

    //define the hashmap
    let hm = new Map()

    //define current pointer
    let cur = head
    hm.set(cur, new Node(cur.val))

    while(cur != null){
        let curClone = hm.get(cur)

        //build random pointer in table as necessary
        if(cur.random != null && !hm.has(cur.random)){
            hm.set(cur.random, new Node(cur.random.val))
        }

        //point current new node's random pointer
        let randomClone = hm.get(cur.random) || null
        curClone.random = randomClone

        //build next pointer in table as necessary
        if(cur.next != null && !hm.has(cur.next)){
            hm.set(cur.next, new Node(cur.next.val))
        }

        //point current new node's next pointer
        let nextClone = hm.get(cur.next) || null
        curClone.next = nextClone

        cur = cur.next

    }
    return hm.get(head)



};
