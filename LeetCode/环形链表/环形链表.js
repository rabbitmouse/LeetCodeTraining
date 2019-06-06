/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var buildList = function(){
    var node1 = new ListNode(3)
    var node2 = new ListNode(2)
    var node3 = new ListNode(0)
    var node4 = new ListNode(-4)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = null

    return node1
}


//判断是否有环，无法找到具体位置
var hasCycle = function(head) {
    let p = head
    let q = head

    while (q != null && q.next != null) {
        p = p.next
        q = q.next.next
        if (p == q) {
           return true
        }
    }

    return false
};


console.log(hasCycle(buildList()))