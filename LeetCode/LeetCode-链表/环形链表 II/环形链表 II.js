/**
 * @param {ListNode} head
 * @return {ListNode}
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
    var node5 = new ListNode(-2)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = null

    return node1
}

// 快慢指针法: 1.先快慢指针找到相交点1，2.将slow指针指向head，3.依次向后遍历寻找第二次相交点就是成环点
var detectCycle = function(head) {
    if (head == null || head.next == null) {
        return null
    }
    let slow = head
    let fast = head

    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            slow = head
            break
        }
    }
    if (fast != null && fast.next != null) {
        while (slow != fast) {
            slow = slow.next
            fast = fast.next
        }
    } else {
        fast = null
    }

    return fast
};

console.log(detectCycle(buildList()))

// // 哈希表算法
// var detectCycle = function(head) {
//     let map = new Map()
//     let idx = 0
//     while (head != null) {
//         if (map.has(head)) {
//             break
//         } else {
//             map.set(head,idx)
//         }
//         head = head.next
//         idx++
//     }

//     return head
// };