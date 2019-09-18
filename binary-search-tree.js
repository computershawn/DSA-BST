class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // If the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }

    /* If the tree already exists, then start at the root, 
       and compare it to the key you want to insert.
       If the new key is less than the node's key 
       then the new node needs to live in the left-hand branch */
    else if (key < this.key) {
      /* If the existing node does not have a left child, 
         meaning that if the `left` pointer is empty, 
         then we can just instantiate and insert the new node 
         as the left child of that node, passing `this` as the parent */
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      /* If the node has an existing left child, 
         then we recursively call the `insert` method 
         so the node is added further down the tree */
      else {
        this.left.insert(key, value);
      }
    }
    /*Similarly, if the new key is greater than the node's key then
    you do the same thing, but on the right - hand side */
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    // If the item is found at the root then return that value
    if (this.key == key) {
      return this.value;
    }
    /* If the item you are looking for is less than the root 
       then follow the left child.
       If there is an existing left child, 
       then recursively check its left and/or right child
       until you find the item */
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    /* If the item you are looking for is greater than the root 
       then follow the right child.
       If there is an existing right child, 
       then recursively check its left and/or right child
       until you find the item */
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    // You have searched the tree and the item is not in the tree
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      /* If the node only has a left child, 
         then you replace the node with its left child */
      else if (this.left) {
        this._replaceWith(this.left);
      }
      /* And similarly if the node only has a right child 
         then you replace it with its right child */
      else if (this.right) {
        this._replaceWith(this.right);
      }
      /* If the node has no children then
         simply remove it and any references to it 
         by calling "this._replaceWith(null)" */
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      }
      else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  getDepth(node) {
    if (!node) {
      return 0
    }
    const leftTree = this.getDepth(node.left)
    const rightTree = this.getDepth(node.right)

    return 1 + Math.max(leftTree, rightTree)

  }
}

const main1 = () => {
  const myBST = new BinarySearchTree()
  myBST.insert(3, 'this')
  myBST.insert(1, 'is')
  myBST.insert(4, 'really')
  myBST.insert(6, 'awesome')
  myBST.insert(9, 'and')
  myBST.insert(2, 'fun')
  myBST.insert(5, 'to')
  myBST.insert(7, 'code')

  console.log(myBST)
  /*
Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. Compare your result with the result from the 1st exercise.
  */
}
//main1()


/*
Create a binary search tree called BST and insert E A S Y Q U E S T I O N into
your tree. Compare your result with the result from the 1st exercise.  
*/
const main2 = () => {
  const myBST = new BinarySearchTree()
  myBST.insert(5, 'E')
  myBST.insert(1, 'A')
  myBST.insert(19, 'S')
  myBST.insert(25, 'Y')
  myBST.insert(16, 'Q')
  myBST.insert(21, 'U')
  myBST.insert(5, 'E')
  myBST.insert(19, 'S')
  myBST.insert(20, 'T')
  myBST.insert(9, 'I')
  myBST.insert(15, 'O')
  myBST.insert(14, 'N')
  console.log(myBST)
}
//main2()

/* Description... */
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}
const main3 = () => {
  const myBST = new BinarySearchTree()
  myBST.insert(3, 1)
  myBST.insert(1, 2)
  myBST.insert(4, 3)
  myBST.insert(6, 4)
  myBST.insert(9, 5)
  myBST.insert(2, 6)
  myBST.insert(5, 7)
  myBST.insert(7, 8)
  console.log(tree(myBST))
}
//main3()


/* Description... */
const main4 = () => {
  const myBST = new BinarySearchTree()
  myBST.insert(3, 1)
  myBST.insert(1, 2)
  myBST.insert(4, 3)
  myBST.insert(6, 4)
  myBST.insert(9, 5)
  myBST.insert(2, 6)
  myBST.insert(5, 7)
  myBST.insert(7, 8)
  console.log(myBST.getDepth(myBST))
}
main4()