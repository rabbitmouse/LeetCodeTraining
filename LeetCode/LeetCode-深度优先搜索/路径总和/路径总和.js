/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree() {
    let node1 = new TreeNode(5)
    let node2 = new TreeNode(4)
    let node3 = new TreeNode(8)
    let node4 = new TreeNode(11)
    let node5 = new TreeNode(13)
    let node6 = new TreeNode(4)
    let node7 = new TreeNode(7)
    let node8 = new TreeNode(2)
    let node9 = new TreeNode(1)
    node1.left = node2
    node1.right = node3
    node2.left = node4
    node3.left = node5
    node3.right = node6
    node4.left = node7
    node4.right = node8
    node6.right = node9
    return node1
}

var hasPathSum = function(root, sum) {
    if (root == null) {
        return false
    }
    return findPath(root, sum, 0)
};

var findPath = function(root, sum, value) {
    if (root == null) {
        return false
    }
    value = value + root.val
    if (root.left == null && root.right == null) {
        return value == sum
    }
    return findPath(root.left, sum, value) || findPath(root.right, sum, value)
}

console.log(hasPathSum(buildTree(), 22))


