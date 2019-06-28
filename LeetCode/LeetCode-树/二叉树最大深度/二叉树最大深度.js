/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree() {
    let node1 = new TreeNode(1)
    let node2 = new TreeNode(0)
    let node3 = new TreeNode(1)
    let node4 = new TreeNode(0)
    let node5 = new TreeNode(0)
    let node6 = new TreeNode(0)
    let node7 = new TreeNode(1)
    node1.left = node2
    node1.right = node3
    node2.left = node4
    node2.right = node5
    node3.left = node6
    node3.right = node7

    return node1
}

var maxDepth = function(root) {
    if (root == null) {
        return 0
    }
    
    let l = maxDepth(root.left)
    let r = maxDepth(root.right)

    return (l > r ? l : r) + 1
};