class user {
    constructor(username, Gmail, password) {
        this.username = username;
        this.Gmail = Gmail;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "chai@ gami;.com", "12345")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//behind the scene

function user(username, Gmail, password) {
    this.username = username;
    this.Gmail = Gmail;
    this.password = password;
}

user.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
user.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const Chai = new user("chai", "chai@ gami;.com", "12345")

console.log(Chai.encryptPassword());
console.log(Chai.changeUsername());
