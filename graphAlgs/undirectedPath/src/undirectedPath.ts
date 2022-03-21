import { AdjList } from "./commonTypes.js"
import bfs from "./bfs.js"

function addEdge(adjList: AdjList, edge: [string, string]) {
  if (!(edge[0] in adjList)) {
    adjList[edge[0]] = new Set()
  }
  if (!(edge[1] in adjList)) {
    adjList[edge[1]] = new Set()
  }

  adjList[edge[0]].add(edge[1])
  adjList[edge[1]].add(edge[0])
}

function edgeListToAdjList(edges: [string, string][]) {
  const adjList: AdjList = {}
  for (const edge of edges) {
    addEdge(adjList, edge)
  }

  return adjList
}

export default function undirectedPath(edges: [string, string][], src: string, dst: string) {
  const adjList: AdjList = edgeListToAdjList(edges)
  return bfs(adjList, src, dst)
}