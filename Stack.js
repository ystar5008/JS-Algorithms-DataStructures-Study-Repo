var Stack = /** @class */ (function () {
    function Stack() {
        this.arr = [];
    }
    //스택에 요소 삽입
    Stack.prototype.push = function (value) {
        return this.arr.push(value);
    };
    //스택의 맨위 요소 제거
    Stack.prototype.pop = function () {
        return this.arr.pop();
    };
    //스택의 맨위 요소 확인 peek
    Stack.prototype.top = function () {
        //at(-1) = 배열의 맨뒤 요소 확인
        return this.arr.at(-1);
    };
    Object.defineProperty(Stack.prototype, "length", {
        //get 키워드는 클래스 내에서 사용되는 특별한 메서드나 속성앞에 붙여서 해당 메서드나 속성을 정의하는데 사용
        get: function () {
            return this.arr.length;
        },
        enumerable: false,
        configurable: true
    });
    //일반 함수로 선언
    Stack.prototype.leength = function () {
        return this.arr.length;
    };
    Stack.prototype.getarr = function () {
        return this.arr;
    };
    Stack.prototype.obj = function () {
        return Object.keys(this.arr);
    };
    return Stack;
}());
var stack = new Stack();
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
console.log(stack.arr);
console.log(stack.getarr());
console.log(stack.top());
console.log(stack.arr);
console.log(stack.obj());
