import getIslands, { AdjList } from "./islands.js"


function gridToAdjList(grid: string[][]) {
  const adjList: AdjList = {}
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const cellName = r + "_" + c
      // Add the cell itself
      adjList[cellName] = []
      // Add above neighbor
      if (r - 1 >= 0) adjList[cellName].push({r: r-1, c: c})
      // Add below neighbor
      if (r + 1 < grid.length) adjList[cellName].push({r: r+1, c: c})
      // Add left neighbor
      if (c - 1 >= 0) adjList[cellName].push({r: r, c: c-1})
      // Add right neighbor
      if (c + 1 < grid[r].length) adjList[cellName].push({r: r, c: c+1})
    }
  }

  return adjList
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(getIslands(gridToAdjList(grid), grid))