const user = {
    username:" heaven",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

    //current contacts is user object, so this.username will refer to user.username
}

// user.welcomeMessage();
// user.username = "Heaven Chakma"
// user.welcomeMessage();

// this keyword refers to the current context, in this case it refers to the user object

console.log(this);
// Arrow function does not have its own this, it takes this from the surrounding context

// function normalFunction(){
//     let username = "Heaven Chakma";
//     console.log(this.username);
// }
// normalFunction();

const arrowFunction = () => {
    let username = "Heaven Chakma";
    console.log(this.username);
}
// arrowFunction();

const addTwo = (num1, num2) => {
    return num1 + num2;
}
// console.log(addTwo(5, 10));

addSum = (num1, num2) => num1 + num2; // implicit return 
console.log(addSum (5, 10));