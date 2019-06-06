/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var buildList1 = function(){
    // return new ListNode(5)
    var node1 = new ListNode(4)
    var node2 = new ListNode(1)
    node1.next = node2
    node2.next = null

    return node1
}

var buildList2 = function(head){
    var node1 = new ListNode(5)
    var node2 = new ListNode(0)
    var node3 = new ListNode(1)
    var node4 = new ListNode(8)
    var node5 = new ListNode(4)
    var node6 = new ListNode(5)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = node6
    node6.next = null

    // head.next.next = node4

    return node1
}


var getIntersectionNode = function(headA, headB) {
    var p = headA
    var q = headB

    while (p != q) {
        p = p != null ? p.next : headB
        q = q != null ? q.next : headA
    }

    return p
};

let list1 = buildList1()
let list2 = buildList2(list1)

console.log(getIntersectionNode(list1,list2))