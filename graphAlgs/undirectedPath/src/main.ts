import undirectedPath from "./undirectedPath.js";

const edges: [string, string][] = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"]
]

console.log("BFS:", undirectedPath(edges, "k", "o", "BFS"))
console.log("DFS:", undirectedPath(edges, "k", "o", "DFS"))