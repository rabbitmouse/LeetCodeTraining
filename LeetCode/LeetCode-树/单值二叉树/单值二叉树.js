/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree() {
    let node1 = new TreeNode(1)
    let node2 = new TreeNode(1)
    let node3 = new TreeNode(1)
    let node4 = new TreeNode(1)
    let node5 = new TreeNode(1)
    let node6 = null
    let node7 = new TreeNode(1)
    node1.left = node2
    node2.left = node3
    node2.right = node4
    node1.right = node5
    node5.left = node6
    node5.right = node7

    return node1
}

var isUnivalTree = function(root) {
    if (root == null) {
        return true
    }

    let res = true
    res = isUnivalTree(root.left)
    if (!res) {
        console.log("false 1")
        return false
    }
    res = isUnivalTree(root.right)
    if (!res) {
        console.log("false 2")
        return false
    }

    if ((root.left == null || root.left.val == root.val) && (root.right == null || root.right.val == root.val)) {
        return true
    } else {
        return false
    }
};

console.log(isUnivalTree(buildTree()))