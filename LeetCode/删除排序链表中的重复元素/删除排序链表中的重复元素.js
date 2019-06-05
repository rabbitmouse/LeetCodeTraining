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
    var node2 = new ListNode(1)
    var node3 = new ListNode(1)
    // var node4 = new ListNode(1)
    // var node5 = new ListNode(1)
    // var node6 = new ListNode(4)
    node1.next = node2
    node2.next = node3
    node3.next = null
    // node4.next = node5
    // node5.next = null
    // node6.next = null

    return node1
}

// 循环-跳过后一个相同点
var deleteDuplicates = function(head) {
    var node = head
    while (head != null && head.next != null) {
        if (head.val == head.next.val) {
            head.next = head.next.next
        } else {
            head = head.next
        }
    }
    return node
};

console.log(deleteDuplicates(buildList()))

// 递归-忽略前一个相同点
var deleteDuplicates = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    if (head.val == head.next.val) {
        head.next = deleteDuplicates(head.next)
        return head.next
    } else {
        head.next = deleteDuplicates(head.next)
        return head
    }
};