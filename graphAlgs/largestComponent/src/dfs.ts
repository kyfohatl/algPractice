export interface AdjList {
  [key: string]: string[]
}

export default function dfs(adjList: AdjList, src: string) {
  const stack: string[] = [src]
  const visited: Set<string> = new Set()

  while (stack.length > 0) {
    const curNode = stack.pop() as string
    visited.add(curNode)
    adjList[curNode].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        stack.push(neighbor)
      }
    })
  }

  return visited
}