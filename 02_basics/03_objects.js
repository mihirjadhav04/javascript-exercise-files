// 1. singleton object: it gets created when done from constructor - Object.create()

// 2. object literals: here it's not singleton.

const mySym = Symbol("key1");

// objects works with KEY:VALUE
const js_user = {
    name : "Mihir",
    "full name" : "Mihir Jadhav",
    age: 23,
    gender: "Male",
    location: "Mumbai",
    email: "mihir@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],

    [mySym] : "mykey1" // to use as symbol use []
}

//Accessing ways to objects.
console.log(js_user.email);
console.log(js_user["email"]);
console.log(js_user["full name"]); // here you can't use . operator to access the key.


console.log(js_user[mySym]);
console.log(`Type of Symbol:`, typeof js_user[mySym] ); 


js_user.email = "bhavin@gmail.com"
// Object.freeze(js_user) // to freeze the object so no one can do the changes to the object.


// console.log(js_user);
js_user.email = "deep@gmail.com"

js_user.greeting = function(){
    console.log("Hello, JS USER!");
}
js_user.greetingTwo = function(){
    console.log(`Hello, ${this["full name"]}!`);
}

console.log(js_user.greeting());
console.log(js_user.greetingTwo());



