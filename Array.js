const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
fruits[12] = "mango";
console.log(fruits[12]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length);



const arr = new Array(100)
for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1
}


const arr1 = Array(1, 2, 3, 4, 5)
console.time()
const arr2 = Array(Math.pow(2, 32) - 1)
console.log(arr2.lastIndexOf())
console.log(arr2)

console.timeEnd()
//console.log(Object.keys(arr))

console.log(arr1)
console.log(arr.reduce((e, n) => e + n))
console.log(arr.filter((i) => i === 55))
// fruits.length = 15;
// console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 10
// console.log(fruits[8]); // undefined

// const arr1 = Array(100).fill()
// for (let i = 0; i < arr1.length; i++) {
//     arr1[i] = i + 1
// }
// const sum = arr1.reduce((현재값, 다음값) => 현재값 + 다음값)
// console.log(sum)
// const arr2 = Array(50).fill(1)

console.log(arr1)
console.log(arr2)