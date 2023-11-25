const obj1 = { name: 'John', age: 30, city: 'New York' };
//객체를 문자열로 변환하는 메소드
//JSON.stringify(객체)
const jsonString1 = JSON.stringify(obj1);
//원본객체
console.log(obj1) //{ name: 'John', age: 30, city: 'New York' }
//원본객체를 문자열로 변환한 변수
console.log(jsonString1)// { "name": "John", "age": 30, "city": "New York" }


//문자열을 담은 변수
const jsonString2 = '{"name":"John","age":30,"city":"New York"}';
//JSON.parse()메서드로 문자열을 객체로 변환함
const obj2 = JSON.parse(jsonString2);
//문자열 => 객체
console.log(obj2) //{ name: 'John', age: 30, city: 'New York' }

//객체를 담은 변수
const originalObject1 = { key: 'value' };
//JSON.stingify(originalObject1)는 객체를 문자열로
//JSON.parse(JSON.stingify(originalObject1))는 문자열을 다시 객체로변환하여 originalObject1과는 완전히 다른 객체를 생성함
const copiedObject1 = JSON.parse(JSON.stringify(originalObject1));
copiedObject1.name = 'kim'
console.log(originalObject1) //{ key: 'value' }
console.log(copiedObject1)//{ key: 'value', name: 'kim' }

//객체를 DeepCopy하는 메서드
function deepCopy(obj1) {
    return JSON.parse(JSON.stringify(obj1));
}

const originalObject2 = { key: 'value' };
console.log(originalObject2)
const copiedObject2 = deepCopy(originalObject2);
console.log(copiedObject2.name = 'kim')

