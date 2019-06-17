var insertionSortList = function(head) {
    let p = head
    let q = head

    while (p != null && p.next != null) {
        let pre1 = p
        let pre2 = null
        p = p.next
        q = head
        while (q != p) {
            if (p.val < q.val) {
                pre1.next = p.next
                p.next = q
                if (pre2 != null) {
                    pre2.next = p
                } else {
                    head = p
                }
                p = pre1
                break
            }
            pre2 = q
            q = q.next
        }
    }

    return head
};