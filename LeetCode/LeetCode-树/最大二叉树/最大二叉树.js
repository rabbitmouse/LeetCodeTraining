/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var constructMaximumBinaryTree = function(nums) {
    if (nums.length == 0) {
        return null
    }
    let max = Math.max(...nums)
    let idx = nums.indexOf(max)

    let root = new TreeNode(max)
    root.left = constructMaximumBinaryTree(nums.slice(0,idx))
    root.right = constructMaximumBinaryTree(nums.slice(++idx))

    return root
};

console.log(constructMaximumBinaryTree([3,2,1,6,0,5]))