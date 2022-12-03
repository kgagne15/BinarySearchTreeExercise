class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  //used solution
  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this; 
    }

    let current = this.root; 

    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */
 //used solution
  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val)
        return this;
      } 
      return this.insertRecursively(val, current.left)
    } else if (val > current.val) {
      if (current.right === null) {
        current.right = new Node(val)
        return this;
      }
      return this.insertRecursively(val, current.right);
    }


  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
//used solution
  find(val) {
    
    let currentNode = this.root; 
    let found = false;
    if (val === currentNode.val) return currentNode;

    

    while (currentNode && !found) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
    } else if (val > currentNode.val) {
      currentNode = currentNode.right;
    } else {
      found = true;
    }
  }
  if (!found) return undefined; 
  return currentNode;

 
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */
//used solution
  findRecursively(val, current = this.root) {
    if (this.root === null) return undefined;

    if (val < current.val) {
      if (current.left === null) {
        return undefined
      }
      return this.findRecursively(val, current.left)
    }

    if (val > current.val) {
      if (current.right === null) {
        return undefined;
      }

      return this.findRecursively(val, current.right);
    }

    
      return current;
    
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */
  //used solution, would like to go over in meeting
  dfsPreOrder() {
    let data = [];
    let current = this.root; 

    function traverse(node) {
      data.push(node.val);
      if (node.left) {
        traverse(node.left)
      } 
      if (node.right) {
        traverse(node.right)
      }
    }

    traverse(current)
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */
  //used solution, would like to go over in meeting
  dfsInOrder() {
    let data  = [];
    let current = this.root; 

    function traverseInOrder(node) {

      node.left && traverseInOrder(node.left)
      data.push(node.val)
      node.right && traverseInOrder(node.right)
    }
    traverseInOrder(current)
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */
//used solution to understand what post order meant, would like to go over in meeting
  dfsPostOrder() {
    let data = [];
    let current = this.root; 

    function traversePostOrder(node){
      node.left && traversePostOrder(node.left)
      node.right && traversePostOrder(node.right)
      data.push(node.val)

    }

    traversePostOrder(current)
    return data;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */
//used solution, would like to go over in meeting
  bfs() {
    let data = []
    let queue = []
    let node = this.root;

    queue.push(node)
    while (queue.length) {
      node = queue.shift(); 
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
