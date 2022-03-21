import { AdjList } from "./commonTypes.js";

export default function bfs(adjList: AdjList, src: string, dst: string) {
  const visited: Set<string> = new Set()
  const queue = [src]
  while (queue.length > 0) {
    // Remove first node from queue
    const curNode = queue.shift() as string
    // If we have reached the destination, return
    if (curNode === dst) return true
    // Mark node as visited
    visited.add(curNode)
    // Now add any neighbors not visited to the back of the queue
    adjList[curNode].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push(neighbor)
      }
    })
  }

  return false
}