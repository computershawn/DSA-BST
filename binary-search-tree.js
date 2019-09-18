class BinaryNode {
  constructor(data, left=null, right=null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  add(data) {
    const searchTree = theNode => {
      if(data < theNode.data) {
        if(!theNode.left) {
          theNode.left = new BinaryNode(data)
        } else {
          return searchTree(theNode.left)
        }
      } else if(data > theNode.data) {
        if(!theNode.right) {
          theNode.right = new BinaryNode(data)
        } else {
          return searchTree(theNode.right)
        }
      }
    }

    const myNode = this.root
    if(myNode === null) {
      this.root = new BinaryNode(data)
      return
    }

    return searchTree(myNode)
  }
}

const main = () => {
  
}