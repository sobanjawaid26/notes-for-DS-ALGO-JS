// Binary Search Tree - recursive version

// Write a function on the BinarySearchTree class

// insert - accepts a value and inserts it into the BST in the correct position.
// The function should return the binary search tree.

// find
// This function should find a node in a binary tree. It should return the node
// if found, otherwise return `null`.

// remove
// This function should remove a node from a binary search tree.
// Your remove function should be able to handle removal of the root node,
// removal of a node with one child and removal of a node with two children.
// The function should return the node removed.

// findSecondLargest
// This function should find 2nd largest node.

// isBalanced
// This function should return true if the BST is balanced, otherwise false.
// A balanced tree is defined as a tree where the depth of all leaf nodes or
// nodes with single children differ by no more than one.

// breadthFirstSearch
// This function should search through each node in the binary search tree
// using breadth first search and return an array containing each node's value.

// depthFirstSearchPreOrder
// This function should search through each node in the binary search tree using
// pre-order depth first search and return an array containing each node's value.

// depthFirstSearchPostOrder
// This function should search through each node in the binary search tree using
// post-order depth first search and return an array containing each node's value.

// depthFirstSearchInOrder
// This function should search through each node in the binary search tree using
// in-order depth first search and return an array containing each node's value.

// Additionally, the following methods are implemented on the class:
// getHeight - returns the height of the tree
// findMin/Max - returns node with min/max value in the binary tree
// invert - invert the current tree structure (produce a tree that is equivalently
// the mirror image of the current tree)

const BinarySearchTreeNode = require('./Binary-search-tree-node');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  getHeight(node = this.root) {

  }

  getMinHeight(node = this.root) {

  }

  isBalanced(node = this.root) {

  }

  // More efficient way to know whether the BST is balanced
  moreEfficientIsBalanced() {

  }

  insert(data, node = this.root) {

  }

  find(data, node = this.root) {

  }

  findMax(node = this.root) {

  }

  findSecondLargest(node = this.root, parent = null) {

  }

  invert(node = this.root) {

  }

  findNodeWithParent(data, currentNode = this.root, parentNode = null) {

  }

  findNextBigNodeWithParent(nextBigNodeParent = this.root, nextBigNode = nextBigNodeParent.right) {

  }

  remove(data) {

  }

  breadthFirstSearch(nodeToTraverse = this.root) {

  }

  depthFirstSearchPreOrder(nodeToTraverse = this.root) {

  }

  depthFirstSearchPostOrder(nodeToTraverse = this.root) {

  }

  depthFirstSearchInOrder(nodeToTraverse = this.root) {

  }
}

