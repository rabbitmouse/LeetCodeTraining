/**
 * @param {ListNode} head
 * @param {number} k
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
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = null

    return node1
}

// 入栈，倒出
var reverseKGroup = function(head, k) {
    let q = new ListNode(0)
    let p = q
    let stack = []

    while (true) {
        let temp = head
        let count = 0
        //按个数压栈
        for (let i = 0; i < k && temp != null; i++) {
            stack.push(temp)
            temp = temp.next
            count += 1
        }
    
        if (count != k) {
            //数量不够，不需要反转
            p.next = head
            break
        }
        //出栈反转
        while (stack.length > 0) {
            var node = stack.pop()
            p.next = node
            p = p.next
        }
        head = temp
    }
    
    return q.next
};

console.log(reverseKGroup(buildList(), 2))


// 递归
var reverseKGroup = function(head, k) {
    return inciseKGroup(head, k)
};

// 辅助函数，切分链表
var inciseKGroup = function(head, k) {
    if (head == null || head.next == null) {
        return head
    }
    let node = head
    let tag = true
    for (var i = 0; i < k - 1; i++) {
        if (node.next == null) {
            tag = false
            break
        }
        node = node.next
    }
    let brek = node
    if (node != null) {
        node = node.next
        brek.next = null
    }
    
    //反转当前切割链表
    let newH = head
    if (tag) {
        newH = reverseList(head)
        head.next = inciseKGroup(node, k)
    }
    return newH
}

// 辅助函数，反转链表
var reverseList = function(node) {
    if (node == null || node.next == null) {
        return node
    }

    var head = reverseList(node.next)
    node.next.next = node
    node.next = null

    return head
}