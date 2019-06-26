function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree1() {
    let node1 = new TreeNode(1)
    let node2 = new TreeNode(2)
    let node3 = new TreeNode(3)
    node1.left = node2
    node1.right = node3

    return node1
}

function buildTree2() {
    let node1 = new TreeNode(1)
    let node2 = new TreeNode(2)
    let node3 = new TreeNode(3)
    node1.left = node2
    node1.right = node3

    return node1
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p == null || q == null) {
        return  p == null && q ==null
    }
    let res1 = true
    let res2 = true
    if (p.val == q.val) {
        res1 = isSameTree(p.left, q.left)
        res2 = isSameTree(p.right, q.right)
    } else {
        return false
    }
    return res1 && res2
};

let tree1 = buildTree1()
let tree2 = buildTree2()
console.log(isSameTree(tree1, tree2))