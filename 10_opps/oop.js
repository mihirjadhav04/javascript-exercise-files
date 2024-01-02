// Object Literal - It literally means object with properties.

const user = {
    username: "Mihir",
    loginCount: 7,
    email: "mihir@gmail.com",
    signedIn: true,

    getUserDetails: function(){
        console.log(`Got user detials from db: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());


// console.log(this); // gives global(like in brower console we run and get) context value.


// const promiseOne = new Promise()
// const date = new Date()

// here new() : is the constructor function which allows us to create new instance from the same object.



function User(username, loginCount, isLoggedIn, email) {
    this. username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.email = email

    return this
}


const userOne = new User("Mihir", 15, true, "mihir@gmail.com")
const userTwo = new User("Bhavin", 45, false, "bhavin@gmail.com") // this overwrites the values of userOne (if we don't user new keyword to create new instance)
console.log(userOne);
console.log(userTwo);



