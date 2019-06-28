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
    let node3 = new TreeNode(2)
    let node4 = null
    let node5 = new TreeNode(3)
    let node6 = null
    let node7 = new TreeNode(3)
    node1.left = node2
    node1.right = node3
    node2.left = node4
    node2.right = node5
    node3.left = node6
    node3.right = node7

    return node1
}

var isSymmetric = function(root) {
    return isMirror(root, root)
};

var isMirror = function(root1, root2) {
    if (root1 == null && root2 == null) {
        return true
    }
    if (root1 == null || root2 == null) { 
        return false
    }

    let res1 = isMirror(root1.left,root2.right)
    let res2 = isMirror(root1.right, root2.left)

    return res1 && res2 && root1.val == root2.val
}

console.log(isSymmetric(buildTree()))