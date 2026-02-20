// console.log("H");
// console.log("e");
// console.log("a");
// console.log("v");
// console.log("e");
// console.log("n");



function sayMyname(){
    console.log("H");
    console.log("e");
    console.log("a");
    console.log("v");
    console.log("e");
    console.log("n");   
}

// sayMyname();

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(5,10);

function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(5,10)
console.log("result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please provide a username");
        return  
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());
console.log(loginUserMessage("heaven"));

function calculateCartPrice(val1, val2, ...num1){  //rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500));

const user = {
    name : "Heaven Chakma",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    name : "Sam",
    price : 499
})

const myNewArray = [200, 300, 400, 500]

function returnSecondElement(getArray){
    return getArray[1]
}

// console.log(returnSecondElement(myNewArray));
console.log(returnSecondElement([200, 500, 900, 1000]));

