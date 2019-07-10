/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function(preorder, inorder) {
    let preLen = preorder.length
    let inLen = inorder.length
    if (preLen != inLen) {
        return null
    }
    if (preLen == 0) {
        return null
    }
    if (preLen == 1) {
        return new TreeNode(preorder[0])
    }

    let rootVal = preorder[0]
    let idx = 0
    for (const i in inorder) {
        if (inorder[i] == rootVal) {
            idx = Number(i)
        }
    }
    let root = new TreeNode(rootVal)
    root.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx))
    root.right = buildTree(preorder.slice(idx+1, preLen), inorder.slice(idx+1, inLen))
    

    return root
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))