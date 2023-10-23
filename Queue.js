export class Queue {
    constructor() {
        //생성자 함수로 빈배열(큐) 생정
        this.arr = [];

    }

    //큐에 요소 추가
    enqueue(value) {

        return this.arr.push(value);
    }

    //큐의 맨앞 요소 삭제
    dequeue() {
        if (this.isEmpty()) {
            return "큐가 비어있습니다."
        }
        return this.arr.shift();
    }

    //큐 맨앞에 있는 요소 확인
    peek() {
        if (this.isEmpty()) {
            return "큐가 비어있습니다."
        }
        return this.arr[0];
    }

    //큐에 요소가 1개이상 존재하는지 확인
    isEmpty() {
        return this.arr.length === 0
    }
    //큐의 길이 확인
    get length() {
        return this.arr.length;
    }

}

const queue = new Queue
console.log(queue.enqueue(1)) //1
console.log(queue.enqueue(2)) //2
console.log(queue.enqueue(3)) //3
console.log(queue.length) //3
console.log(queue.dequeue()) //1
console.log(queue.isEmpty()) //false
console.log(queue.arr) //[2,3]