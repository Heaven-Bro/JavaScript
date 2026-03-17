function setuserName(username) {
    //complex DB calls
    this.username = username
    console.log('Called');
    
}

function  createUser(username, email, password){
    // this.username = username
    setuserName.call(this, username)
    this.email = email
    this.password = password
}

const Chai = new createUser("chai", "chai@ gami;.com", "12345")

console.log(Chai);
