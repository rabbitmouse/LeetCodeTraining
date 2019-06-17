
/**
 * @param {ListNode} head
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
    var node6 = new ListNode(6)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = node6
    node6.next = null

    return node1
}

var swapPairs = function(head) {
    return swapNodes(head)
};

var swapNodes = function(node) {
    if (node == null || node.next == null) {
        return node
    }
    var p = node
    var q = node.next
    node = node.next.next

    q.next = p
    p.next = swapNodes(node)
    return q
}

console.log(swapPairs(buildList()))