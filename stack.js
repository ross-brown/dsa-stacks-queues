/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);

    const top = this.top;
    this.top = newNode;
    newNode.next = top;

    this.size+=1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.isEmpty()) throw new Error("Stack is empty");

    const top = this.top
    this.top = this.top.next;
    this.size -= 1;

    return top.val;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {

    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {

    return this.size === 0;
  }
}

module.exports = Stack;
