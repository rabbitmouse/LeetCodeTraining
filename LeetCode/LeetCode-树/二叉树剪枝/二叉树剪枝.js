/**
 * @param {TreeNode} root
 * @return {TreeNode}
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

var pruneTree = function(root) {
    if (root == null) {
        return null
    }
    
    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)
    
    if (root.val == 0 && root.left == null && root.right == null) {
        return null
    } 
    return root
};

console.log(pruneTree(buildTree()))