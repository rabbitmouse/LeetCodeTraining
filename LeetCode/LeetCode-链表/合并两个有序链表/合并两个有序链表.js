/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var buildList1 = function(){
    // return new ListNode(5)
    var node1 = new ListNode(1)
    var node2 = new ListNode(3)
    var node3 = new ListNode(4)
    node1.next = node2
    node2.next = node3
    node3.next = null

    return node1
}

var buildList2 = function(){
    var node1 = new ListNode(1)
    var node2 = new ListNode(2)
    var node3 = new ListNode(4)
    node1.next = node2
    node2.next = node3
    node3.next = null

    return node1
}

// 后插-递归
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) {
        return l2
    } else if (l2 == null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};

console.log (mergeTwoLists(buildList1(),buildList2()))


// 后插
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2
    }
    if (!l2) {
        return l1
    }
    let head = null
    let pre = null
    if (l1.val < l2.val) {
        head = l1
        pre = l1
        l1 = l1.next
    } else {
        head = l2
        pre = l2
        l2 = l2.next
    }

    while (l1 && l2) {
        if (l1.val < l2.val) {
            pre.next = l1
            pre = l1
            l1 = l1.next
        } else {
            pre.next = l2
            pre = l2
            l2 = l2.next
        }    
    }

    if (l1) {
        pre.next = l1
    }
    if (l2) {
        pre.next = l2
    }
    return head
};

// 前插
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2
    }
    if (!l2) {
        return l1
    }
    let head = l1
    while (l1 && l2) {
        if (l1.val < l2.val || l1.val == l2.val) {
            pre = l1
            l1 = l1.next
        } else {
            let temp = l2.next
            l2.next = l1
            if (pre != null) {
                pre.next = l2
            } else {
                head = l2
            }
            pre = l2
            l2 = temp
        }
    }

    if (l2) {
        pre.next = l2
    }
    return head
};