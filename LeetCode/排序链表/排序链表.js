function ListNode(val) {
    this.val = val;
    this.next = null;
}

var buildList = function(){
    var node1 = new ListNode(4)
    var node2 = new ListNode(2)
    var node3 = new ListNode(1)
    var node4 = new ListNode(6)
    var node5 = new ListNode(5)
    var node6 = new ListNode(3)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = node6
    node6.next = null

    return node1
}

// 归并排序，O(nlogn)
// 1.找中点
// 2.将链表分成2个
// 3.递归合并2个有序数组
var sortList = function(head) {
    return mergeSort(head)
};

var mergeSort = function(node) {
    if (node == null || node.next == null) {
        return node
    }
    var p1 = node
    var p2 = node
    var brek = node

    while (p2 && p2.next != null) {
        brek = p1
        p1 = p1.next
        p2 = p2.next.next
    }
    //断开链表
    brek.next = null

    let l1 = mergeSort(node) //不断分割，返回排序好的前半段链表
    let l2 = mergeSort(p1)  //不断分割，返回排序好的后半段链表
    return mergeTwoLists(l1, l2) //返回排序好的新链表
}


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

console.log(sortList(buildList()))


// 插入排序，O(n2)
// var sortList = function(head) {
//     let p = head
//     let q = head

//     while (p != null && p.next != null) {
//         let pre1 = p
//         let pre2 = null
//         p = p.next
//         q = head
//         while (q != p) {
//             if (p.val < q.val) {
//                 pre1.next = p.next
//                 p.next = q
//                 if (pre2 != null) {
//                     pre2.next = p
//                 } else {
//                     head = p
//                 }
//                 p = pre1
//                 break
//             }
//             pre2 = q
//             q = q.next
//         }
//     }

//     return head
// };

// console.log(sortList(buildList()))