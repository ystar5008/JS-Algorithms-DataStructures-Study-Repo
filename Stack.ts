class Stack {
  public arr: number[]; // 숫자 배열으로 가정
  constructor() {
    this.arr = [];
  }

  //스택에 요소 삽입
  push(value: number): number | void {
    return this.arr.push(value);
  }

  //스택의 맨위 요소 제거
  pop(): number | undefined {
    return this.arr.pop();
  }

  //스택의 맨위 요소 확인 peek
  top(): number | undefined {
    //at(-1) = 배열의 맨뒤 요소 확인
    return this.arr.at(-1);
  }

  //get 키워드는 클래스 내에서 사용되는 특별한 메서드나 속성앞에 붙여서 해당 메서드나 속성을 정의하는데 사용
  get length(): number {
    return this.arr.length;
  }
  //일반 함수로 선언
  leength(): number {
    return this.arr.length;
  }

  //배열반환
  getarr(): number[] {
    return this.arr;
  }

  obj(): string[] {
    return Object.keys(this.arr);
  }
}

const stack = new Stack();
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(3);
stack.push(8);
stack.push(32);
stack.push(32);
stack.push(32);
stack.push(32);
console.log(stack.length);
//get 키워드가 없을떈 일반 함수를 호출하여 사용
console.log(stack.leength());
stack.pop();
console.log(stack.top());
//배열 반환
console.log(stack.arr);
//배열 반환
console.log(stack.getarr());
console.log(stack.top());
console.log(stack.obj());
