const usermail = "heaven@gmail.com";

if (usermail) {
    console.log("You have an email");
}else{
    console.log("Please provide an email");
}

//falsy values in JavaScript are: false, 0, -0, BigInt(0n), "", null, undefined, and NaN. All other values are truthy.]

// truthy values in JavaScript are all values that are not falsy. This includes non-empty strings, non-zero numbers, objects, arrays, and functions. For example:
// "0", 'false, " " , [], {}, function(){} are all truthy values in JavaScript.

//empty array checks
const userEmail = []
if (userEmail.length === 0) {
    console.log("Email is empty");
} else {
    console.log("Email is not empty");
}

//empty object checks
const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}



// Nullish Coalescing Operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand. It is used to provide a default value for a variable that may be null or undefined.

let  val1;
val1 = 5 ?? 10;        // val1 will be 5 because it is not null or undefined
val1 = null ?? 10;     // val1 will be 10 because the left-hand side is null
val1 = undefined ?? 110; // val1 will be 110 because the left-hand side is undefined
val1 = null ?? undefined ?? 20; // val1 will be 20 because both left-hand sides are null or undefined


console.log(val1);  



// Ternary Operator is a conditional operator that takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. It is a shorthand for an if-else statement.

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
