// singleton 
//object.create() method to create a new object with a specified prototype object and properties.
//object literal

const mySymbol = Symbol("key1") //create a unique symbol

const jsuser = {
    name: "Heaven",
    "Full name ": "Heaven Chakma",
    [mySymbol]: "mykey1", //using symbol as a key
    age: 22,
    location: "Rangamati",
    email : "heaven@example.com",
    isloggedIn: true,
    lastloginDaays: ["Monday", "Tuesday", "Wednesday"],

}

console.log(jsuser.name);
console.log(jsuser["age"]) ;
console.log(jsuser["Full name "]);//when the key has space we have to use bracket notation
console.log(jsuser[mySymbol]); //accessing symbol key


// jsuser.email = "heaven04@email.com"; //updating email
// object.freeze(jsuser); //freeze the object to prevent any changes
// jsuser.email = "heaven05@email.com" ;//this will not work because the object is frozen
// console.log(jsuser);

jsuser.greeting = function() {
    console.log("hello JS user");
}


jsuser.greeting2 = function() {
    console.log(`hello JS user ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());