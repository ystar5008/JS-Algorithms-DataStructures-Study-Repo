class Queue {
    constructor() {
        this.arr = [];

    }

    enqueue(value) {
        return this.arr.push(value);
    }

    dequeue() {
        return this.arr.shift();
    }

    peek() {
        return this.arr[0];
    }

    get length() {
        return this.arr.length;
    }
}

const queue = new Queue
console.log(queue.arr)