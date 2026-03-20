const User = {
    _email : 'Heavengmail.com',
    _password: "1334", 

    get email() {
        return this._email;
    },
    set email(newEmail) {
        this._email = newEmail;
    }
}

const Tea = Object.create(User)
console.log(Tea.email);
