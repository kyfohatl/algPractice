class BtNode {
  val: number
  left: BtNode | null
  right: BtNode | null

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function treeMinValue(root: BtNode | null): number {
  if (!root) return Infinity

  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right))
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

console.log(treeMinValue(a)) // -> -2

const a1 = new BtNode(5);
const b1 = new BtNode(11);
const c1 = new BtNode(3);
const d1 = new BtNode(4);
const e1 = new BtNode(14);
const f1 = new BtNode(12);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

console.log(treeMinValue(a1)) // -> 3

const a2 = new BtNode(-1);
const b2 = new BtNode(-6);
const c2 = new BtNode(-5);
const d2 = new BtNode(-3);
const e2 = new BtNode(-4);
const f2 = new BtNode(-13);
const g2 = new BtNode(-2);
const h2 = new BtNode(-2);

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;
e2.left = g2;
f2.right = h2;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     /       \
//    -2       -2

console.log(treeMinValue(a2)) // -> -13

const a3 = new BtNode(42);

//        42

console.log(treeMinValue(a3)) // -> 42