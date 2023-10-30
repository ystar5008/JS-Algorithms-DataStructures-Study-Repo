

let today = new Date('October 21, 2023 21:32:30');
let today1 = Date('October 21, 2023 21:32:30');

// console.log(today.getDate())
// console.log(today.getDay())
//console.log(today.getFullYear())
//console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getTime())

console.log(today1)



let date = Date.now()
console.log(date)


const event = new Date('August 19, 1975 23:15:30 UTC');

const jsonDate = event.toJSON();

console.log(jsonDate);
// Expected output: "1975-08-19T23:15:30.000Z"

console.log(new Date(jsonDate).toUTCString());
// Expected output: "Tue, 19 Aug 1975 23:15:30 GMT"