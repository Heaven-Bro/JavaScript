const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


const math = {
    name : "tea",
    price : 350,
    isAvailable : true,
    orderTea : function(){
        console.log("Not available right now.");
    }
}

console.log(Object.getOwnPropertyDescriptor(math, "name"));

Object.defineProperty(math, 'name', {
    // writable : false,
    configurable : true,
})

console.log(Object.getOwnPropertyDescriptor(math, "name"));

for (let [key, value] of Object.entries(math)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}