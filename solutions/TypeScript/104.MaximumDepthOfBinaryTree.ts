function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    const left_depth = maxDepth(root.left)
    const right_depth = maxDepth(root.right)
    return 1 + Math.max(left_depth, right_depth)
};