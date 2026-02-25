// var c  = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("INNER: ", a);

}

// console.log(a);
// console.log(b);
// console.log(c);


for(let i = 0; i < 5; i++){
    console.log(i);
}


// {} ---> block scope
// function(){} ---> function scope
// if(){} ---> block scope
// for(){} ---> block scope
//global scope ---> var, let, const
// block scope ---> let, const
// function scope ---> var, let, const
// var is function scoped
// let and const are block scoped


function one(){
    const username = "Heaven Chakma"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website); error because website is block scoped and cannot be accessed outside the block
    //nested function can access the parent function variable but parent function cannot access the nested function variable

    two()
}

one()


if(true){
    const username = "Heaven Chakma"
    if(username === "Heaven Chakma"){
        const website = "YouTube"
        console.log(username + " " + website);
    }
    // console.log(website); error because website is block scoped and cannot be accessed outside the block
    // block scope cannot access the variable of another block scope
}

// console.log(username); error because username is block scoped and cannot be accessed outside the block


//+++++++++++ interesting ++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}

// addTwo(5) // error because addTwo is a function expression and cannot be accessed before it is defined

const addTwo/* expresion(like variables) */ = function(num){
    return num + 2
}

addTwo(5)