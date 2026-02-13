const accountId =144553
let accountEmail = "heaven@gamil.com"
var accountPassword = "12345678"
accountCity = "Rangamati"
let accountState;

// accountId = 2 // not allowed because accountId is a constant
accountEmail = "hc@gmail.com"
accountPassword = "87654321"
accountCity = "Dhaka"

console.log(accountId);

/*
prefer not to use var
because of its function scope and hoisting behavior which can lead to unexpected bugs in larger codebases.
Instead, it's generally recommended to use let and const for variable declarations in modern JavaScript development.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])