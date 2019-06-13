/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
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
    // var node5 = new ListNode(5)
    // var node6 = new ListNode(6)
    // var node7 = new ListNode(7)
    // var node8 = new ListNode(8)
    // var node9 = new ListNode(9)
    // var node10 = new ListNode(10)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    // node4.next = node5
    // node5.next = node6
    // node6.next = node7
    // node7.next = node8
    // node8.next = node9
    // node9.next = node10
    // node10.next = null

    return node1
}

var splitListToParts = function(root, k) {
    var node = root
    var list = []

    var len = 0
    while (node != null) {
        len += 1
        node = node.next
    }
    node = root

    var con = parseInt(len / k)
    var rem = len % k

    while (k != 0) {
        var side = rem > 0 ? con+1 : con
        var brk = node
        list.push(node)
        for (var i = 0; i < side; i++) {
            if (node != null) {
                brk = node
                node = node.next
            }
        }
        if (brk != null) {
            brk.next = null
        }
        k -= 1
        rem -= 1
    }

    return list
};

console.log(splitListToParts(buildList(), 5))