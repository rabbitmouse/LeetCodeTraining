/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree() {
    let node1 = new TreeNode(383)
    let node2 = new TreeNode(453)
    let node3 = new TreeNode(469)
    let node4 = new TreeNode(619)
    let node5 = new TreeNode(723)
    let node6 = new TreeNode(752)
    let node7 = new TreeNode(867)
    // let node8 = new TreeNode(7)
    // let node9 = new TreeNode(9)

    node1.left = node2
    node2.right = node3
    node3.left = node4
    node4.left = node5
    node4.right = node6
    node3.right = node7
    // node7.left = node8
    // node7.right = node9

    return node1
}

var increasingBST = function(root) {
    let tree = new TreeNode(0)
    let head = tree
    
    var increasing = function(root) {
        if (root == null) {
            return
        }
        //中序遍历
        increasing(root.left)
        console.log(root.val)
        head.right = root
        head = head.right
        head.left = null

        increasing(root.right)
    }

    increasing(root)
    return tree.right
};
console.log(increasingBST(buildTree()))