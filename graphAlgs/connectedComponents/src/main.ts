import dfs, { AdjList } from "./dfs.js";

function getConnectedComponents(adjList: AdjList) {
  const visited: Set<string> = new Set()
  const connectedComponents: Set<string>[] = []
  for (const node in adjList) {
    // If a node has already been visited, we do not need to explore it again
    if (!visited.has(node)) {
      // Perform dfs starting from the chosen node
      const component = dfs(adjList, node)
      connectedComponents.push(component)
      // Mark all elements as visited
      for (const elem of component) {
        visited.add(elem)
      }
    }
  }

  return connectedComponents
}

const adjList = {
  "3": [],
  "4": ["6"],
  "6": ["4", "5", "7", "8"],
  "8": ["6"],
  "7": ["6"],
  "5": ["6"],
  "1": ["2"],
  "2": ["1"]
}

console.log(getConnectedComponents(adjList))