// const tinderuser = new Object(); //singleton object

const tinderuser = {} //non singleton object literal

tinderuser.id = "123abc"
tinderuser.name = "Heaven"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email: "heaven@email.com",
    fullname: {
        userFullName: {
            firstname: "Heaven",
            lastname: "Chakma"
        }
        
    }
}

// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1: "one", 2: "two"}
const obj2 = {3: "three", 4: "four"}
const obj4 = {5: "five", 6: "six"}

// const obj3 = {obj1, obj2, obj4} //this will create a nested object
// const obj3 = Object.assign({}, obj1, obj2, obj4) //merge two objects

const object3 = {...obj1, ...obj2, ...obj4} //spread operator to merge two objects
// console.log(object3)


const users =[
    {
        id: 1,
        email: "heaven@gmail.com",
    },
    {
        id: 2,
        email: "john@gmail.com",
    },
    {
        id: 3,
        email: "jane@gmail.com",
    }

]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));
