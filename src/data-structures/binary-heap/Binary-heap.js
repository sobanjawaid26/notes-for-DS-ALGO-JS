// BinaryHeap

// Implement the following functions on the MaxBinaryHeap/MinBinaryHeap class

// insert
// This function should insert a node in a binary heap.
// Make sure to re-order the heap after insertion if necessary.

// extractMax/Min
// This function should remove the root node in a binary heap.
// Make sure to re-order the heap after removal if necessary.

// heapify
// This function should convert array into a max/min heap.
// Should return the values property on the heap.

// heapSort
// This function should sort array with Time complexity O(n * log n) and
// Space complexity O(1). Should return the values property on the heap.

// Additionally, the following methods are implemented on the class:
// find - returns an array of indexes of items with the given value
// remove - removes all items with the given value

class BinaryHeap {
  constructor() {
    if (new.target === BinaryHeap) {
      throw new TypeError('You cannot instantiate BinaryHeap class directly');
    }

    this.values = [];
    this.getItem = this.getItem.bind(this);
  }

  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1;
  }

  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getItem(index) {
    return this.values[index];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();

    return this;
  }

  extract() {
    if (this.isEmpty()) return null;
    if (this.values.length === 1) return this.values.pop();

    this.swap(0, this.values.length - 1);
    const extractedItem = this.values.pop();
    this.sinkDown();

    return extractedItem;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.values[0];
  }

  find(value, getValueFn = this.getItem) {
    const indexes = [];

    for (let i = 0; i < this.values.length; i++) {
      if (getValueFn(i) === value) indexes.push(i);
    }

    return indexes;
  }

  remove(value, getValueFn = this.getItem) {
    const numberItems = this.find(value, getValueFn).length;

    for (let i = 0; i < numberItems; i++) {
      const itemIndex = this.find(value, getValueFn)[0];

      if (this.values.length === 1 || itemIndex === this.values.length - 1) {
        this.values.pop();
        return this;
      }

      this.swap(itemIndex, this.values.length - 1);
      this.values.pop();
      const swapItemValue = this.getItem(itemIndex);
      const parentIndex = this.getParentIndex(itemIndex);

      if (parentIndex >= 0 && this.compare(swapItemValue, this.getItem(parentIndex))) {
        this.bubbleUp(itemIndex);
      } else {
        this.sinkDown(itemIndex);
      }
    }

    return this;
  }

  heapify(array = this.values, index = array.length) {
    if (array === this.values) {
      for (let i = 0; i < index; i++) {
        this.bubbleUp(i);
      }
    } else {
      for (let i = 0; i < index; i++) {
        this.insert(array[i]);
      }
    }

    return this.values;
  }

  heapSort(array = this.values) {
    const length = array.length;

    if (array !== this.values) this.heapify(array);

    for (let i = 1; i < length; i++) {
      this.swap(0, length - i);
      this.heapify(this.values, length - i);
    }

    return this.values.reverse();
  }

  heapSortViaExtract() {
    const sortedArray = [];
    const valuesCopy = [...this.values];

    while (this.values.length) {
      sortedArray.push(this.extract());
    };

    this.values = [...valuesCopy];

    return sortedArray;
  }

  bubbleUp(idx = this.values.length - 1) {
    let index = idx;
    const value = this.getItem(index);

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.compare(this.getItem(parentIndex), value)) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  sinkDown(idx = 0) {
    const length = this.values.length;
    let index = idx;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (leftChildIndex >= length && leftChildIndex >= length) break;

      if (rightChildIndex >= length &&
        this.compare(this.getItem(index), this.getItem(leftChildIndex))) break;

      if (this.compare(this.getItem(index), this.getItem(leftChildIndex)) &&
        this.compare(this.getItem(index), this.getItem(rightChildIndex))) break;

      const swapIndex = rightChildIndex >= length ||
      this.compare(this.getItem(leftChildIndex), this.getItem(rightChildIndex))
        ? leftChildIndex : rightChildIndex;

      this.swap(index, swapIndex);
      index = swapIndex;
    }
  }

  isEmpty() {
    return !this.values.length;
  }

  swap(indexOne, indexTwo) {
    [this.values[indexOne], this.values[indexTwo]] =
      [this.values[indexTwo], this.values[indexOne]];
  }

  compare(firstItem, secondItem) {
    throw new Error('You must implement your own compare method for min or max heap.');
  }
}

module.exports = BinaryHeap;
