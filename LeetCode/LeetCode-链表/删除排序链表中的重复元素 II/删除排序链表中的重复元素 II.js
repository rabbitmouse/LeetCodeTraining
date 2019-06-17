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
    var node4 = new ListNode(2)
    var node5 = new ListNode(3)
    var node6 = new ListNode(5)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = node6

    return node1
}

// 递归，跳过重复结点
var deleteDuplicates = function(head) {
    if (head == null) {
        return head
    }
    //发现第一个相同结点
    if (head.next != null && head.val == head.next.val) {
        //循环查找下一个不同点,丢弃所有相同的结点
        while (head.next != null && head.val == head.next.val) {
            head = head.next
        }
        return deleteDuplicates(head.next)
    } else {
        head.next = deleteDuplicates(head.next)
    }
    //当前结点与下一个结点不同，直接返回当前结点
    return head
};

console.log(deleteDuplicates(buildList()))


// 快慢指针，跳过重复node拼接
var deleteDuplicates = function(head) {
    let d = new ListNode(0)
    let n = d
    d.next = head
    let p = head

    let sam = false
    while (p != null) {
        if (p.next != null && p.val == p.next.val ) {
            p = p.next
            sam = true
            continue
        }
        p = p.next
        if (sam) {
            d.next = p
            sam = false
        } else {
            d = d.next
        }
    }

    return n.next
};