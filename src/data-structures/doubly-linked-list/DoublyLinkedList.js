// Doubly Linked List

// Implement the following on the DoublyLinkedList class

// push
// This function should accept a value add a node to the end of the DoublyLinkedList
// with the given value. It should return the DoublyLinkedList.

// pop
// This function should remove a node at the end of the DoublyLinkedList.
// It should return the node removed.

// shift
// This function should remove a node at the beginning of the DoublyLinkedList.
// It should return the node removed.

// unshift
// This function should accept a value and add a node to the beginning of
// the DoublyLinkedList with the given value. It should return the DoublyLinkedList.

// get
// This internal/helper function should find a node at a specified index
// in a DoublyLinkedList. It should return the found node.

// set
// This function should accept an index and a value and update the value
// of the node in the DoublyLinkedList at the index with the new value.
// It should return true if the node is updated successfully,
// or false if an invalid index is passed in.

// insert
// This internal/helper function should insert a node at a specified index
// in a DoublyLinkedList. It should return true if the index is valid,
// and false if the index is invalid (less than 0 or greater than the length of the list).
//
// remove
// This function should remove a node at a specified index in a DoublyLinkedList.
// It should return the removed node, if the index is valid,
// or undefined if the index is invalid.

// reverse
// This function should reverse all of the nodes in a DoublyLinkedList,
// and should return the list.

// rotate
// This function should rotate all the nodes in the list by some number passed in.
// For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2,
// the list should be modified to 3 -> 4 -> 5 -> 1 -> 2.
// The number passed in to rotate can be any integer (should work with negative indexes).
// Time Complexity: O(N), where N is the length of the list.
// Space Complexity: O(1)


const DoyublyLinkedlist = require('./DoublyLinkedListNode');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new DoublyLinkedList(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else if(this.head === this.tail){
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    let removed;
    if(!this.head)
      return undefined;
    else if(this.head === this.tail){
      removed = this.head;
      this.head = this.tail = null;
    }
    else{
      removed = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return removed;
  }

  shift(){
    let removed;
    if(!this.head)
      return indefined;
    else if(this.head === this.tail){
      removed = this.tail;
      this.head = this.tail = null;
    }
    else {
      removed = this.head;
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length++;
    return removed;
  }

  unshift(value){
    if(!this.head)
      return undefined;
    else{
      let newNode = new DoublyLinkedList(value);
      let temp = this.head;
      newNode.next = this.head;
      
    }
  }
}
