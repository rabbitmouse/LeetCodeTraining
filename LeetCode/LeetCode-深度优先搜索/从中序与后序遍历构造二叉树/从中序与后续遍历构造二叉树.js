/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function(inorder, postorder) {
    if (inorder.length != postorder.length) {
        return null
    }
    if (inorder.length == 0) {
        return null
    }
    if (inorder.length == 1) {
        return new TreeNode(inorder[0]) 
    }

    let inLen = inorder.length
    let outLen = postorder.length
    let rootVal = postorder[outLen - 1]

    let idx = Number(0)
    for (const i in inorder) {
        if (inorder[i] == rootVal) {
            idx = Number(i)
            break
        }
    }
    
    let root = new TreeNode(rootVal)

    root.left = buildTree(inorder.slice(0, idx), postorder.slice(0, idx))
    root.right = buildTree(inorder.slice(idx + 1, inLen), postorder.slice(idx, outLen - 1))

    return root
};

console.log(buildTree([4,2,1,7,5,3,6], [4,2,7,5,6,3,1]))

// console.log([1,2,3,4,5,6].slice(0,3))