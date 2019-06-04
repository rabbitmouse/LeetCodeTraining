/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
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
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = null

    return node1
}

// 迭代法:头插
var reverseList = function(head) {
    var pre = null

    while (head) {
        var node = head.next
        head.next = pre
        pre = head
        head = node
    }
    return pre
};


var node = buildList()
console.log(reverseList(node)) 

// 递归法
var reverseList = function(head) {
    if (/*空链表*/head == null || head.next == null) {
        return head
    }

    //找最后一个点
    var node = reverseList(head.next)

    //反转-> 1.后指向前，前断环
    head.next.next = head
    head.next = null

    return node
};

