module.exports = class DoublyLinkedList {
  constructor(data,next = null, prev= null){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
