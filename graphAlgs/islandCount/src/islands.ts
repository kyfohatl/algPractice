interface Cell {
  r: number,
  c: number
}

export interface AdjList {
  [key: string]: Cell[]
}

interface BfsReturnType {
  visited: Set<Cell>,
  island?: Set<Cell>
}

function cellName(cell: Cell) {
  return cell.r + "_" + cell.c
}

function bfs(adjList: AdjList, grid: string[][], visited: Set<Cell>, src: Cell): BfsReturnType {
  const queue: Cell[] = [src]
  const island: Set<Cell> = new Set()

  // No need to explore water cells, or cells already visited in previous runs
  if (grid[src.r][src.c] === "W" || visited.has(src)) return {visited: visited}

  while (queue.length > 0) {
    const curCell = queue.shift() as Cell
    // Mark current cell as visited
    visited.add(curCell)
    // Mark current cell as part of an island
    island.add(curCell)
    // Add any neighboring land cells to the queue
    for (const neighbor of adjList[cellName(curCell)]) {
      if (grid[neighbor.r][neighbor.c] === "L" && !visited.has(neighbor)) queue.push(neighbor)
    }
  }

  return {visited: visited, island: island}
}

export default function getIslands(adjList: AdjList, grid: string[][]) {
  // Keep track of cells arealy explored
  let visited: Set<Cell> = new Set()
  // Store all islands here
  const islands: Set<Cell>[] = []
  
  // Step through each cell and run bfs
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[c].length; c++) {
      const result = bfs(adjList, grid, visited, {r: r, c: c})
      // Update list of visited cells
      visited = result.visited
      // If a new island is found, add it
      if (result.island) {
        islands.push(result.island)
      }
    }
  }

  return islands
}