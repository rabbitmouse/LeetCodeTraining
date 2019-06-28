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
    let node2 = new TreeNode(2)
    let node3 = new TreeNode(5)
    let node4 = new TreeNode(3)
    let node5 = new TreeNode(4)
    let node6 = new TreeNode(6)
    node1.left = node2
    node1.right = node3
    node2.left = node4
    node2.right = node5
    node3.right = node6

    return node1
}

//递归优化：全局变量找到最后一个结点，先展开右子树，再连接左子树
var flatten = function(root) {
    let pre = null
    var flattenTree = function(node) {
        if (node == null) {
            return
        }
        flattenTree(node.right)
        flattenTree(node.left)

        node.right = pre
        node.left = null
        pre = node
    }

    flattenTree(root)
};

let tree = buildTree()
flatten(tree)
console.log(tree)

//递归展开链表，递归找到最后一个结点
var flatten = function(root) {
    if (root == null) {
        return
    }

    flatten(root.left)
    flatten(root.right)

    if (root.left != null) {
        let temp = findLastNode(root.left)
        temp.right = root.right
        root.right = root.left
        root.left = null
    }
};

var findLastNode = function(root) {
    if (root.right == null) {
        return root
    }
    return findLastNode(root.right)
}