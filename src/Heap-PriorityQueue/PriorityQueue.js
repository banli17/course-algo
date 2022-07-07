const MaxHeap = require('./MaxHeap')

class PriorityQueue {
  constructor() {
    this.maxHeap = new MaxHeap()
  }

  getSize() {
    return this.maxHeap.size()
  }

  isEmpty() {
    return this.maxHeap.isEmpty()
  }

  getFront() {
    return this.maxHeap.findMax()
  }

  // 入队
  enqueue(e) {
    this.maxHeap.add(e)
  }

  dequeue() {
    return this.maxHeap.extractMax()
  }
}
