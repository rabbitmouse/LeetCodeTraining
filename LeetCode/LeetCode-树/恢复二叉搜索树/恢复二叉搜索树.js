/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree() {
    let node1 = new TreeNode(1)
    let node2 = new TreeNode(3)
    let node3 = new TreeNode(2)
    node1.left = node2
    node2.right = node3
    // node2.right = node5
    // node3.left = node6
    // node3.right = node7

    return node1
}

var recoverTree = function(root) {
    let node1 = null
    let node2 = null
    let pre = null

    var findErrorNode = function(root) {
        if (root == null) {
            return
        }
        findErrorNode(root.left)
        console.log(root.val)
        if (pre != null && pre.val >= root.val) {
            if (node1 == null) {
                node1 = pre
            } 
            if (node1 != null) {
                node2 = root
            }
        }
        pre = root
        findErrorNode(root.right)
    }

    findErrorNode(root)
    let temp = node1.val
    node1.val = node2.val
    node2.val = temp
};

console.log(recoverTree(buildTree()))