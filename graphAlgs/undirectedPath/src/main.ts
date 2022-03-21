import undirectedPath from "./undirectedPath.js";

const edges: [string, string][] = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"]
]

console.log(undirectedPath(edges, "i", "k"))