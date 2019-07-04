/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */

function Node(val,children) {
    this.val = val;
    this.children = children;
};

var maxDepth = function(root) {
    if (!root) return 0
    let depth = 0

    for (const child of root.children) {
        let dep = maxDepth(child)
        depth = dep > depth ? dep : depth
    }
    return depth + 1
};

//借助全局变量，递归，深度优先搜索
var maxDepth = function(root) {

    var depthSubs = function(root, level) {
        if (root == null) {
            return
        }
        //前序遍历
        depth = depth > level ? depth : level

        for (const node of root.children) {
            depthSubs(node, level + 1)
        }
    }

    let depth = 0
    if (root == null) {
        return depth
    }
    depthSubs(root, 1)
    
    return depth
};