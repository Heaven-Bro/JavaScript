// how the data is stored in the memory and  accessed, based on the there are  two classification of data 
// primitive and non-primitive data types

// primitive data types are stored in the stack memory and non-primitive data types are stored in the heap memory


//primitive
// 7 types(call by value)(not given to a reference in the memory. they are copied and give to you separatedly and whatever changes you make to them are changed in the copy) 
//  string, number, boolean, null, undefined, symbol, bigint


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol("123")
const anotherId = Symbol("123")
const bigNumber = 34567890123456789012345678901234567890n


console.log(id == anotherId);


//non-primitive
// call by reference (given to a reference in the memory. they are not copied and give to you as a reference and whatever changes you make to them are changed in the original value)
// object , array, functions


//array
const heros = ["shaktiman", "doga", "batman", "superman"]

//object
const myObj = {
    name: "satyarth",
    age: 22,
    isLoggedIn: false
}

// function
function myFunc(){
    console.log("hello world");
}


//data types summary
console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof myFunc); //object function
