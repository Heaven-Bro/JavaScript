class User {
    constructor (username) {
        this.username = username;
    }

    LogMe(){
        console.log(`Username  : ${this.username}`);
        
    }
    static createId(){
        return `134`
    }
}

const Heaven = new User("Heaven");
// console.log(Heaven.createId());


class Teacher extends User {
    constructor(username,gmail){
        super(username);
        this.gmail = gmail;
    }
}


const iPhone = new Teacher("iPhone", "Ihobjgfmail.com");
console.log(iPhone.LogMe());
console.log(iPhone.createId);
