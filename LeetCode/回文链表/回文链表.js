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
    var node1 = new ListNode(1)
    var node2 = new ListNode(2)
    var node3 = new ListNode(3)
    var node4 = new ListNode(4)
    var node5 = new ListNode(2)
    var node6 = new ListNode(1)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = node6
    node6.next = null

    return node1
}

var isPalindrome = function(head) {
    if (head == null || head.next == null) {
        return true
    }
    let p = head
    let q = head

    while (q != null && q.next != null) {
        q = q.next.next
        p = p.next  //找到中心点
    }
    //反转后半截链表,存储首节点
    let pre = null
    while (p != null) {
        let node = p
        p = p.next
        node.next = pre
        pre = node
    }

    while (pre != null) {
        if (pre.val != head.val) {
            return false
        } else {
            pre = pre.next
            head = head.next
        }
    }

    return true
};

console.log(isPalindrome(buildList()))