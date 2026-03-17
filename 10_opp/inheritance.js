class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName iv ${this.username}`);
        
    }
}


class admin extends user {
    constructor(username, gmail, password){
        super(username);
        this.gmail = gmail;
        this.password = password;
    }

    add(){
        console.log(` ${this.username} can add new user`);
    }
}

const User1 = new admin("Heaven", "heavengamil.com", "134");
User1.add(); 
User1.logMe();

const Admin1 = new user("Chai", "chai@gmail.com", "567");
Admin1.logMe();


console.log(User1 instanceof admin);
console.log(Admin1 instanceof user);