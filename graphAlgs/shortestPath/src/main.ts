import getShortestPath, { AdjList } from "./shortestPath.js"


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

const edgeList1: [string, string][] = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"]
]

const edgeList2: [string, string][] = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]

const edgeList3: [string, string][] = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

const edgeList4: [string, string][] = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

const edgeList5: [string, string][] = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

const edgeList6: [string, string][] = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];

const edgeList7: [string, string][] = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];

const edgeList8: [string, string][] = [
  ['m', 'n'],
  ['n', 'o'],
  ['o', 'p'],
  ['p', 'q'],
  ['t', 'o'],
  ['r', 'q'],
  ['r', 's']
];

console.log(getShortestPath(edgeListToAdjList(edgeList1), "w", "z"))
console.log(getShortestPath(edgeListToAdjList(edgeList2), "y", "x"))
console.log(getShortestPath(edgeListToAdjList(edgeList3), "a", "e"))
console.log(getShortestPath(edgeListToAdjList(edgeList4), "e", "c"))
console.log(getShortestPath(edgeListToAdjList(edgeList5), "b", "g"))
console.log(getShortestPath(edgeListToAdjList(edgeList6), "w", "e"))
console.log(getShortestPath(edgeListToAdjList(edgeList7), "n", "e"))
console.log(getShortestPath(edgeListToAdjList(edgeList8), "m", "s"))