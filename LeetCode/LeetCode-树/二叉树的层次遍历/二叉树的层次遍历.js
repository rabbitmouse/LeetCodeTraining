/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree() {
    let node1 = new TreeNode(3)
    let node2 = new TreeNode(9)
    let node3 = new TreeNode(20)
    let node4 = new TreeNode(15)
    let node5 = new TreeNode(7)
    node1.left = node2
    node1.right = node3
    node3.left = node4
    node3.right = node5

    return node1
}

// BFS：深度优先搜索算法
var levelOrder = function(root) {
    let ans = []
    if (root == null) {
        return ans
    }
    deepLevel(root, 0, ans)
    return ans
};

var deepLevel = function(root, depth, ans) {
    if (root == null) {
        return 
    }
    if (depth >= ans.length) {
        ans.push([])
    }

    ans[depth].push(root.val)
    deepLevel(root.left, depth + 1, ans)
    deepLevel(root.right, depth + 1, ans)
}

console.log(levelOrder(buildTree()))

// BFS：宽度优先搜索算法
var levelOrder = function(root) {
    let res = []
    if (root == null) {
        return res
    }
    let levelNodes = [root]
    while(true) {
        res.push(valOfNodes(levelNodes))
        levelNodes = nextLevel(levelNodes)
        if (levelNodes.length == 0) {
            break
        }
    }
    return res
};

var valOfNodes = function(nodes) {
    let vals = []
    for (const node of nodes) {
        vals.push(node.val)
    }
    return vals
}

var nextLevel = function(nodes) {
    let arr = []
    for (const node of nodes) {
        if (node.left != null) {
            arr.push(node.left)
        }
        if (node.right != null) {
            arr.push(node.right)
        }
    }
    return arr
}