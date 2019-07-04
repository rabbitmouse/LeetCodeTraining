/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// array中点值作为根节点值，并递归重建
var sortedArrayToBST = function(nums) {
    if (nums.length == 0) {
        return null
    }
    let mid = parseInt(nums.length / 2) 
    let val = nums[mid]
    let node = new TreeNode(val)

    node.left = sortedArrayToBST(nums.slice(0, mid))
    node.right = sortedArrayToBST(nums.slice(mid + 1))

    return node
};

console.log(sortedArrayToBST([-10,-3,0,5,9]))