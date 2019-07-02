/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree() {
    let node1 = new TreeNode(3)
    let node2 = new TreeNode(1)
    let node3 = new TreeNode(5)
    let node4 = new TreeNode(0)
    let node5 = new TreeNode(2)
    let node6 = new TreeNode(4)
    let node7 = new TreeNode(6)
    node1.left = node2
    node1.right = node3
    node2.left = node4
    node2.right = node5
    node3.left = node6
    node3.right = node7

    return node1
}

// 利用搜索二叉树中序遍历递增的特性，记录上一个遍历到的节点
var isValidBST = function(root) {
    let pre = null
    var isValidByMeddle = function(root) {
        if (root == null) {
            return true
        }
        if (isValidByMeddle(root.left) == false) {
            return false
        }
        if (pre != null && pre >= root.val) {
            return false
        }
        pre = root.val

        if (isValidByMeddle(root.right) == false) {
            return false
        }

        return true
    }

    return isValidByMeddle(root)
};



console.log(isValidBST(buildTree()))

// 双重递归
// var isValidBST = function(root) {
//     if (root == null) {
//         return true
//     }

//     if (isValidBST(root.left) == false || isValidBST(root.right) == false) {
//         return false
//     }

//     return isLessValid(root.left, root.val) && isGreaterValid(root.right, root.val)
// };

// var isLessValid = function(root, val) {
//     if (root == null) {
//         return true
//     }
//     if (isLessValid(root.left, val) == false || isLessValid(root.right, val) == false) {
//         return false
//     }
//     return root.val < val
// }

// var isGreaterValid = function(root, val) {
//     if (root == null) {
//         return true
//     }
//     if (isGreaterValid(root.left, val) == false || isGreaterValid(root.right, val) == false) {
//         return false
//     }
//     return root.val > val
// }