import bfs from "./bfs.js";
import BtNode from "./commonTypes.js";
import dfs from "./dfs.js";

function treeIncludes(root: BtNode | null, target: string) {
  console.log("BFS:", bfs(root, target))
  console.log("DFS:", dfs(root, target))
}

const a1 = new BtNode("a");
const b1 = new BtNode("b");
const c1 = new BtNode("c");
const d1 = new BtNode("d");
const e1 = new BtNode("e");
const f1 = new BtNode("f");

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeIncludes(a1, "e"); // -> true

const a2 = new BtNode("a");
const b2 = new BtNode("b");
const c2 = new BtNode("c");
const d2 = new BtNode("d");
const e2 = new BtNode("e");
const f2 = new BtNode("f");

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeIncludes(a2, "a"); // -> true

const a3 = new BtNode("a");
const b3 = new BtNode("b");
const c3 = new BtNode("c");
const d3 = new BtNode("d");
const e3 = new BtNode("e");
const f3 = new BtNode("f");

a3.left = b3;
a3.right = c3;
b3.left = d3;
b3.right = e3;
c3.right = f3;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeIncludes(a3, "n"); // -> false

const a4 = new BtNode("a");
const b4 = new BtNode("b");
const c4 = new BtNode("c");
const d4 = new BtNode("d");
const e4 = new BtNode("e");
const f4 = new BtNode("f");
const g4 = new BtNode("g");
const h4 = new BtNode("h");

a4.left = b4;
a4.right = c4;
b4.left = d4;
b4.right = e4;
c4.right = f4;
e4.left = g4;
f4.right = h4;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

treeIncludes(a4, "f"); // -> true

const a5 = new BtNode("a");
const b5 = new BtNode("b");
const c5 = new BtNode("c");
const d5 = new BtNode("d");
const e5 = new BtNode("e");
const f5 = new BtNode("f");
const g5 = new BtNode("g");
const h5 = new BtNode("h");

a5.left = b5;
a5.right = c5;
b5.left = d5;
b5.right = e5;
c5.right = f5;
e5.left = g5;
f5.right = h5;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

treeIncludes(a5, "p"); // -> false


treeIncludes(null, "b"); // -> false