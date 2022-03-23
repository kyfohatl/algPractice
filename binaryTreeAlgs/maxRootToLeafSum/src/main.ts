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

function maxPathSum(root: BtNode | null): number | null {
  // Null nodes should return null instead of a number like 0, because otherwise 0 could be larger
  // than another child which is a negative number
  if (!root) return null

  const maxL = maxPathSum(root.left)
  const maxR = maxPathSum(root.right)

  // Check against the scenario where either one or both of the child paths return null
  if (maxL === null && maxR === null) return root.val
  if (maxL === null) return root.val + (maxR as number)
  if (maxR === null) return root.val + (maxL as number)

  return root.val + Math.max(maxL, maxR)
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

console.log(maxPathSum(a)) // -> 18

const a1 = new BtNode(5);
const b1 = new BtNode(11);
const c1 = new BtNode(54);
const d1 = new BtNode(20);
const e1 = new BtNode(15);
const f1 = new BtNode(1);
const g1 = new BtNode(3);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
e1.left = f1;
e1.right = g1;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

console.log(maxPathSum(a1)) // -> 59

const a2 = new BtNode(-1);
const b2 = new BtNode(-6);
const c2 = new BtNode(-5);
const d2 = new BtNode(-3);
const e2 = new BtNode(0);
const f2 = new BtNode(-13);
const g2 = new BtNode(-1);
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
// -3   0    -13
//     /       \
//    -1       -2

console.log(maxPathSum(a2)) // -> -8

const a3 = new BtNode(42);

//        42

console.log(maxPathSum(a3)) // -> 42