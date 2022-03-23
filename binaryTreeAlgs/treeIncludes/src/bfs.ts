import BtNode from "./commonTypes.js";

export default function bfs(root: BtNode | null, target: string) {
  if (!root) return false

  const queue = [root]
  while (queue.length > 0) {
    // Remove node from front of queue
    const curNode = queue.shift() as BtNode
    // If we have found the value, return
    if (curNode.val === target) return true

    // Add the children to the queue if they exist
    if (curNode.left) queue.push(curNode.left)
    if (curNode.right) queue.push(curNode.right)
  }

  return false
}