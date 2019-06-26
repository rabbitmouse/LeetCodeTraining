/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree() {
    let node1 = new TreeNode(3)
    let node2 = new TreeNode(5)
    let node3 = new TreeNode(6)
    let node4 = new TreeNode(2)
    let node5 = new TreeNode(7)
    let node6 = new TreeNode(4)
    let node7 = new TreeNode(1)
    let node8 = new TreeNode(9)
    let node9 = new TreeNode(8)
    node1.left = node2
    node2.left = node3
    node2.right = node4
    node4.left = node5
    node4.right = node6
    node1.right = node7
    node7.left = node8
    node7.right = node9

    return node1
}

// 递归，深度搜索，查找子节点
var leafSimilar = function(root1, root2) {
    let res1 = []
    let res2 = []

    similarSet(root1, res1)
    similarSet(root2, res2)

    if (res1.length != res2.length) {
        return false
    }
    for (const i in res1) {
        if (res1[i] != res2[i]) {
            return false
        }
    }
    return true
};

var similarSet = function(root, res) {
    if (root == null) {
        return
    }
    if (root.left == null && root.right == null) {
        res.push(root.val)
    }
    similarSet(root.left, res)
    similarSet(root.right, res)
}

console.log(leafSimilar(buildTree(), buildTree()))