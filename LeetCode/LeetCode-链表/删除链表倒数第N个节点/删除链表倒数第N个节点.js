/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var buildList = function(){
    var node1 = new ListNode(1)
    var node2 = new ListNode(2)
    var node3 = new ListNode(3)
    var node4 = new ListNode(4)
    var node5 = new ListNode(5)
    // var node6 = new ListNode(4)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    // node5.next = null
    // node6.next = null

    return node1
}

var removeNthFromEnd = function(head, n) {
    let p = head
    let q = new ListNode(0)
    q.next = head
    while(p != null) {
        n = n - 1
        p = p.next
        if (n < 0) {
            q = q.next
        }
    }
    if (q.next == head) {
        head = head.next
    }
    q.next = q.next.next

    return head
};

console.log(removeNthFromEnd(buildList(), 2))
