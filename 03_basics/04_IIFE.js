// Immediately Invoked Function Expression (IIFE) is a function that is executed immediately after it is defined. It is a design pattern which produces a lexical scope using JavaScript's function scoping. This helps to avoid polluting the global scope and also allows for data privacy.

// IIFE is a function that is defined and immediately invoked. It is a self-executing anonymous function.
//Avoiding Global Scope Pollution: Strategies For Cleaner Code
// there is a problem due to pollution of global scope sometimes it has to do with the variable of global scope which are declared there To remove the pollution, we can use IIFE to create a new scope and avoid polluting the global scope.


(function a(){
    console.log("Hello World");
})(); // Hello World

(  () =>{
    console.log("Freedom");         
}) (); // Freedom


(  (name) =>{
    console.log(`Freedom ${name}`);         
}) ("Heaven"); // Freedom Heaven

// IIFE can also be used to create a private scope for variables and functions. This is useful when we want to create a module pattern in JavaScript. It allows us to encapsulate our code and avoid polluting the global scope.


