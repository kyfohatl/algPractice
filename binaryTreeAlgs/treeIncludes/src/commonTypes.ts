export default class BtNode {
  val: string
  left: BtNode | null
  right: BtNode | null

  constructor(val: string) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}