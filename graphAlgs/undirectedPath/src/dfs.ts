import { AdjList } from "./commonTypes.js";

export default function dfs(adjList: AdjList, src: string, dst: string) {
  const stack: string[] = [src]
  const visited: Set<string> = new Set()
  while (stack.length > 0) {
    // Pop the top node from the stack
    const curNode = stack.pop() as string
    // If we have reached the destination, return
    if (curNode === dst) return true
    // Mark node as visited
    visited.add(curNode)
    // Add any neighbors not visited to the top of the stack
    adjList[curNode].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        stack.push(neighbor)
      }
    })
  }

  // Failed to reach destination
  return false
}