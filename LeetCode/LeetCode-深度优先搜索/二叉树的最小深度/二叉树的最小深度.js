/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree() {
    let node1 = new TreeNode(3)
    let node2 = new TreeNode(9)
    // let node3 = new TreeNode(20)
    // let node4 = new TreeNode(15)
    // let node5 = new TreeNode(7)
    node1.left = node2
    // node1.right = node3
    // node3.left = node4
    // node3.right = node5
    return node1
}
//不使用全局变量
var minDepth = function(root) {
    if (root == null) {
        return 0
    }
    if (root.left == null && root.right == null) {
        return 1
    }
    let depth = Math.pow(2, 53) - 1
    if (root.left != null) {
        depth = Math.min(depth, minDepth(root.left))
    }
    if (root.right != null) {
        depth = Math.min(depth, minDepth(root.right))
    }

    return depth + 1
};

console.log(minDepth(buildTree()))

// 使用全局变量
var minDepth = function(root) {
    if (root == null) {
        return 0
    }
    let minDepth = Math.pow(2,53)-1
    var findMinDepth = function(root, depth) {
        if (root == null) {
            return
        }
        if (root.left == null && root.right == null) {
            if (depth < minDepth) {
                minDepth = depth
            }
            return
        }
        findMinDepth(root.left, depth + 1)
        findMinDepth(root.right, depth + 1)
    }

    findMinDepth(root, 1)
    return minDepth
};