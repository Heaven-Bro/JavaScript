// if

if (true) {
    

}

const isusserloggedin = true;

if (isusserloggedin) {

}

// < == less than
// > == greater than
// <= == less than or equal to
// >= == greater than or equal to
// 3 == '3' // true (loose equality, checks value only)
// === == strict equality (checks value and type)
// !== == strict inequality (checks value and type)


const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`you have the power to ${power}`)
}

const balance = 1000

// if (balance > 100000) console.log("test"), console.log("test2");


//else if

// if (balance > 500) {
//     console.log("less than 50000")
// } else if (balance > 700) {
//     console.log("less than 70000")
// }
// else if (balance > 900) {
//     console.log("less than 100000")
// } else {
//     console.log("more than 100000")
// }


const userloggedin = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedin && debitcard ) {
    console.log("Allow user to make a purchase")
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("Allow user to access the dashboard")
}