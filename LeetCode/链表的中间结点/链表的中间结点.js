/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
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

var middleNode = function(head) {
    var p1 = head
    var p2 = head

    while (p2 && p2.next != null) {
        p1 = p1.next
        p2 = p2.next.next
    }

    return p1
};

console.log(middleNode(buildList()))