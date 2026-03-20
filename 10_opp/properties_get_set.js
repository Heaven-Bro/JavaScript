function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}
//     Object.defineProperties(this, {
//         email: {
//             get: function () {
//                 return this._email;
//             },
//             set: function (newEmail) {
//                 this.email = newEmail;
//             }
//         },
//         password: {
//             get: function () {
//                 return `${this._password}Heaven`;
//             },
//             set: function (newPassword) {
//                 this._password = newPassword;
//             }
//         }
//     });

// }

const Heaven = new User("Heavengmail.com", "password123");
console.log(Heaven.password);
console.log(Heaven.email);