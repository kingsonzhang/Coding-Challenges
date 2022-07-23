function maxDepth(root) {
    return root === null ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};
