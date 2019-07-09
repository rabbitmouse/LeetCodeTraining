/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function buildList() {
    let node1 = new ListNode(0)
    let node2 = new ListNode(1)
    let node3 = new ListNode(2)
    let node4 = new ListNode(3)
    let node5 = new ListNode(4)
    let node6 = new ListNode(5)
    let node7 = new ListNode(6)
    let node8 = new ListNode(7)
    let node9 = new ListNode(8)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = node6
    node6.next = node7
    node7.next = node8
    node8.next = node9
    return node1
}

var sortedListToBST = function(head) {
    if (head == null) {
        return null
    }
    if (head.next == null) {
        return new TreeNode(head.val)
    }

    let slow = head
    let fast = head
    let pre = head
    let root = new TreeNode(0)
    while(fast != null && fast.next != null) {
        pre = slow
        fast = fast.next.next
        slow = slow.next
    }

    let right = slow.next
    slow.next = null
    pre.next = null
    
    root.val = slow.val
    root.left = sortedListToBST(head)
    root.right = sortedListToBST(right)

    return root
};

console.log(sortedListToBST(buildList()))