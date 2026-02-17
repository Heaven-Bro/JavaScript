//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());

console.log(myDate.getFullYear());
console.log(myDate.getMonth());

console.log(typeof myDate); 

// let myCreateDate = new Date(2002, 12, 28)
// console.log(myCreateDate.toDateString())
//let myCreateDate = new Date(2025, 0, 23, 5, 3) 
//let myCreateDate = new Date("2025-01-14") 
let myCreateDate = new Date("01-14-2025") 
console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));  // in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth())

newDate.toLocaleString('default', {weekday: 'long'})