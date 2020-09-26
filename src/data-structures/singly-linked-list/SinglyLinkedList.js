// Singly Linked List

// Implement the following on the SinglyLinkedList class:

// push
// This function should take in a value and add a node to the end of the SinglyLinkedList.
// It should return the SinglyLinkedList.

// pop
// This function should remove a node at the end of the SinglyLinkedList.
// It should return the node removed.

// shift
// This function should remove a node from the beginning of the SinglyLinkedList.
// It should return the node removed.

// unshift
// This function should add a new node to the beginning of the SinglyLinkedList.
// It should return the SinglyLinkedList.

// get
// This function should find a node at a specified index in a SinglyLinkedList.
// It should return the found node.

// set
// This function should accept an index and a value and update the value
// of the node in the SinglyLinkedList at the index with the new value.
// It should return true if the node is updated successfully,
// or false if an invalid index is passed in.

// insert
// This should insert a node at a specified index in a SinglyLinkedList.
// It should return true if the index is valid, and false if the index is
// invalid (less than 0 or greater than the length of the list).

// remove
// This function should remove a node at a specified index in a SinglyLinkedList.
// It should return the removed node, if the index is valid,
// or undefined if the index is invalid.

// reverse
// This function should reverse the SinglyLinkedList in place.

// rotate
// This function should rotate all the nodes in the list by some number passed in.
// For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2,
// the list should be modified to 3 -> 4 -> 5 -> 1 -> 2.
// The number passed in to rotate can be any integer (should work with negative indexes).
// Time Complexity: O(N), where N is the length of the list.
// Space Complexity: O(1)

// Additionally, the following methods are implemented on the class:
// find - accepts a parameter compareTo which can be a value for comparison or
// a comparison function (must return true or false for each node), returns
// the found node or its index.

// iterate - accepts a callback function as a parameter, iterates through each node
// in the list applying the callback function, returns array of values returned from
// the callback function

// eslint-disable-next-line no-unused-vars
const SinglyLinkedListNode = require('./SinglyLinkedListNode');

// eslint-disable-next-line no-unused-vars
class SinglyLinedList {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new SinglyLinkedListNode(data);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  pop(data) {
    let removedNode;
    if(!this.tail)
      return undefined;
    else if (this.head === this.tail){
      this.head = null;
      this.tail = null;
      return null;
    }
    else {
      let currentNode = this.head;
      while(currentNode.next !== this.tail){
        currentNode = currentNode.next;
      }
      removedNode = currentNode.next;
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length--;
  }

  shift(data) {
    // remove element from the beginning of LL
    if(!this.head) return undefined;
    else if(this.head == this.tail){
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = this.head.next;
    }
  }


  unshift() {
    // add new element at the beginning of the LL
    let newNode = new SinglyLinedList(data);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    else if(this.head === this.tail){
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  get(index) {
    let counter = 0;
    let currentNode = this.head;
    if(!this.head) return undefined;
    else if(this.head === this.tail && index !== 0){
      return undefined;
    } else {
      while(counter !== index){
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }

  set(index, data) {
    let currentNode = this.head;
    let newNode = new SinglyLinedList(data);
    for(let i = 0;i<index; i++){
      currentNode = currentNode.next;
    }
    let temp = currentNode.next
    currentNode.next = newNode
    newNode.next = temp;
  }

  insert(data) {
  }

  remove(data) {
  }

  rotate(data) {
  }
}
