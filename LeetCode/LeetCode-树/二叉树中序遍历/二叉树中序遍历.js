/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree() {
    let node1 = new TreeNode(1)
    let node2 = new TreeNode(2)
    let node3 = new TreeNode(3)
    node1.right = node2
    node2.left = node3

    return node1
}

//递归法
var inorderTraversal = function(root) {
    let res = []

    var inorder = function(root) {
        if (root == null) {
            return null
        }
        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return res
};

console.log(inorderTraversal(buildTree()))