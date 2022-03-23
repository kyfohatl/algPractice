export default class BtNode {
  val: number
  left: BtNode | null
  right: BtNode | null

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}