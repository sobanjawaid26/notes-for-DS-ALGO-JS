const BinaryHeap = require('./Binary-heap');

class MaxBinaryHeap extends BinaryHeap {
  extractMax() {
    return super.extract();
  }

  compare(firstItem, secondItem) {
    return firstItem >= secondItem;
  }
}

const binaryHeap1 = new MaxBinaryHeap().insert(1).insert(2).insert(3).insert(4).insert(5).insert(6).insert(4);

console.log(binaryHeap1.values); // [ 6, 4, 5, 1, 3, 2, 4 ]
console.log(binaryHeap1.find(4)); // [ 1, 6 ]
binaryHeap1.remove(4);
console.log(binaryHeap1.values); // [ 6, 3, 5, 1, 2 ]
binaryHeap1.insert(4);
console.log(binaryHeap1.values); // [ 6, 3, 5, 1, 2, 4 ]
console.log(binaryHeap1.extractMax()); // 6
console.log(binaryHeap1.values); // [ 5, 3, 4, 1, 2 ]
console.log(binaryHeap1.heapSortViaExtract());
console.log(binaryHeap1.values);

const binaryHeap2 = new MaxBinaryHeap();

binaryHeap2.heapify([7, 4, 9, 6, 1, 8, 4]);
console.log(binaryHeap2.values); // [ 9, 6, 8, 4, 1, 7, 4 ]
binaryHeap2.heapSort();
console.log(binaryHeap2.values); // [ 9, 8, 7, 6, 4, 4, 1 ]
