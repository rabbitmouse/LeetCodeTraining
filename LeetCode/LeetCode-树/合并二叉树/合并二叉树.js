/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree1() {
    let node1 = new TreeNode(1)
    let node2 = new TreeNode(3)
    let node3 = new TreeNode(2)
    let node4 = new TreeNode(5)
    node1.left = node2
    node1.right = node3
    node2.left = node4

    return node1
}

function buildTree2() {
    let node1 = new TreeNode(2)
    let node2 = new TreeNode(1)
    let node3 = new TreeNode(3)
    let node4 = new TreeNode(4)
    let node5 = new TreeNode(7)
    node1.left = node2
    node1.right = node3
    node2.right = node4
    node3.right = node5

    return node1
}

var mergeTrees = function(t1, t2) {
    if (t1 == null) {
        return t2
    }
    if (t2 == null) {
        return t1
    }
    
    t1.val = t1.val + t2.val
    t1.left = mergeTrees(t1.left, t2.left)
    t1.right = mergeTrees(t1.right, t2.right)
    return t1
};

let tree1 = buildTree1()
let tree2 = buildTree2()
mergeTrees(tree1, tree2)
console.log(tree1)


