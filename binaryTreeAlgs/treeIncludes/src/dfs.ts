import BtNode from "./commonTypes.js";

export default function dfs(root: BtNode | null, target: string): boolean {
  // Base case: we have reached the end of a branch
  if (!root) return false

  // If we have found the value, return true
  if (root.val === target) return true

  // Otherwise check child subtrees for target
  return dfs(root.left, target) || dfs(root.right, target)
}