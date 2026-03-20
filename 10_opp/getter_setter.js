class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email;
    }
    set email(newEmail) {
        this._email = newEmail;
    }

    get password() {
        return `${this._password}Heaven`;
    }

    set password(newPassword) {
        this._password = newPassword;
    }

}

const Heaven = new User("heaven@example.com", "password123");
console.log(Heaven.password);
console.log(Heaven.email);
