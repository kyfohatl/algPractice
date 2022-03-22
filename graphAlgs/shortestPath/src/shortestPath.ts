export interface AdjList {
  [key: string]: Set<string>
}

interface Node {
  name: string,
  prev?: Node,
  pathLength: number
}

// Builds a path from the start to the given node and returns is
function buildPath(node: Node) {
  let curNode = node
  let path = node.name
  while (curNode.prev) {
    path = curNode.prev.name + "->" + path
    curNode = curNode.prev
  }

  return path
}

export default function getShortestPath(adjList: AdjList, src: string, dst: string) {
  const queue: Node[] = [{ name: src, pathLength: 0 }]
  const visited: Set<string> = new Set()

  while (queue.length > 0) {
    // Remove the first node in the queue
    const curNode = queue.shift() as Node
    // Mark node as visited
    visited.add(curNode.name)
    // If we have reached the target node, return the path and its length
    if (curNode.name === dst) return { path: buildPath(curNode), pathLength: curNode.pathLength }
    // Otherwise add non-visited neighbors
    for (const neighbor of adjList[curNode.name]) {
      if (!visited.has(neighbor)) {
        queue.push({ name: neighbor, prev: curNode, pathLength: curNode.pathLength + 1 })
      }
    }
  }

  // Destination cannot be reached
  return { path: "", pathLength: -1 }
}