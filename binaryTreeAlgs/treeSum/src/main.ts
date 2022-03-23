import BtNode from "./commonTypes.js";

function treeSum(root: BtNode | null): number {
  if (!root) return 0
  return root.val + treeSum(root.left) + treeSum(root.right)
}

const a = new BtNode(3);
const b = new BtNode(11);
const c = new BtNode(4);
const d = new BtNode(4);
const e = new BtNode(-2);
const f = new BtNode(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeSum(a)) // -> 21

const a1 = new BtNode(1);
const b1 = new BtNode(6);
const c1 = new BtNode(0);
const d1 = new BtNode(3);
const e1 = new BtNode(-6);
const f1 = new BtNode(2);
const g1 = new BtNode(2);
const h1 = new BtNode(2);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;
e1.left = g1;
f1.right = h1;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

console.log(treeSum(a1)); // -> 10

console.log(treeSum(null)) // -> 0