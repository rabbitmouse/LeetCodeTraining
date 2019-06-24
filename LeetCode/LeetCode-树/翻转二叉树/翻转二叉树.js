/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree() {
    let node1 = new TreeNode(4)
    let node2 = new TreeNode(2)
    let node3 = new TreeNode(1)
    let node4 = new TreeNode(3)
    let node5 = new TreeNode(7)
    let node6 = new TreeNode(6)
    let node7 = new TreeNode(9)
    node1.left = node2
    node2.left = node3
    node2.right = node4
    node1.right = node5
    node5.left = node6
    node5.right = node7

    return node1
}

var invertTree = function(root) {
    if (root == null) {
        return root
    }

    invertTree(root.left)
    invertTree(root.right)

    let temp = root.left
    root.left = root.right
    root.right = temp

    return root
};

console.log (invertTree(buildTree()))
