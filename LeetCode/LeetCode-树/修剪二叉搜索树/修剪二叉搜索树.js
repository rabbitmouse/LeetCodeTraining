/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree() {
    let node1 = new TreeNode(3)
    let node2 = new TreeNode(0)
    let node3 = new TreeNode(4)
    let node4 = new TreeNode(2)
    let node5 = new TreeNode(1)
    node1.left = node2
    node1.right = node3
    node2.right = node4
    node4.left = node5

    return node1
}

var trimBST = function(root, L, R) {
    if (root == null) {
        return root
    }

    root.left = trimBST(root.left, L, R)
    root.right = trimBST(root.right, L, R)

    if (root.val < L) {
        return root.right
    } else if (root.val > R) {
        return root.left
    } else {
        return root
    }
};

console.log(trimBST(buildTree(), 1, 3))

// 官方迭代解法
var trimBST = function(root, L, R) {
    if (root == null) {
        return root
    }
    if (root.val > R) {
        return trimBST(root.left, L, R)
    }
    if (root.val < L) {
        return trimBST(root.right, L, R)
    }
    
    root.left = trimBST(root.left, L, R)
    root.right = trimBST(root.right, L, R)

    return root
};