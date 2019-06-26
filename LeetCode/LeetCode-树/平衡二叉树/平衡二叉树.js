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
    let node2 = new TreeNode(2)
    let node3 = new TreeNode(3)
    let node4 = new TreeNode(4)
    let node5 = new TreeNode(5)
    // node1.left = node2
    node1.right = node3
    node3.left = node4
    node3.right = node5

    return node1
}

var isBalanced = function(root) {
    if (root == null) {
        return true
    }
    let l = deep(root.left)
    let r = deep(root.right)
    if (Math.abs(l - r) > 1) {
        return false
    } else {
        let res1 = isBalanced(root.left)
        let res2 = isBalanced(root.right)
        return res1 && res2
    }
};

var deep = function(root) {
    if (root == null) {
        return 0
    }
    let l = deep(root.left)
    let r = deep(root.right)

    return (l - r > 0 ? l : r ) + 1
}

console.log(isBalanced(buildTree()))