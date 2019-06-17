/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var buildList = function(){
    var node1 = new ListNode(1)
    var node2 = new ListNode(2)
    // var node3 = new ListNode(3)
    // var node4 = new ListNode(4)
    // var node5 = new ListNode(5)
    node1.next = node2
    // node2.next = node3
    // node3.next = node4
    // node4.next = node5
    // node5.next = null

    return node1
}

var reverseBetween = function(head, m, n) {
    let p = new ListNode(0)
    p.next = head
    head = p
    let flag = false
    while (true) {
        if (m > 1 && !flag) {
            // 前半段不需要反转的链表
            for (var i = 0; i < m - 1; i++) {
                head = head.next
            }
            flag = true
        } else {
            //中间需要反转的链表
            //切割数组
            let s = head.next
            let tail = head.next
            let last = null
            for (var i = 0; i <= n - m; i++) {
                last = tail
                tail = tail.next
            }
            last.next = null
            //反转数组
            let q = reverseList(s)
            head.next = q
            //最后不需要反转的链表
            s.next = tail
            break
        }
    }

    return p.next
};

var reverseList = function(head) {
    var pre = null

    while (head) {
        var node = head.next
        head.next = pre
        pre = head
        head = node
    }
    return pre
}

console.log(reverseBetween(buildList(), 1, 2))