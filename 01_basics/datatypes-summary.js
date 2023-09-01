// 1. Primitive Datatypes - (Call By Value)
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 200.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);

// const bigNumber = 23456789009876545678

// 2. Non-Primitive Datatypes - (Call By Reference)
// Array, Objects, Functions
const gods = [ "kaalbhairav","hanuman","mahadev"]

let my_object = {
    name: "Mihir",
    age: 23
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof id);



//++++++++++++++++++++++++++++++++ MEMORY +++++++++++++++++

// STACK (Primitive) : Here you get the copy of the value.
// &
// HEAP (Non-Primitive) : Here you get the reference of the actual value.


let myYoutubeName = "Mihir Jadhav"
let anotherName = myYoutubeName


anotherName = "Muitaristic"

console.log(myYoutubeName)
console.log(anotherName)


let userOne = {
    email : "jadhavmihir@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

console.log(userOne);
console.log(userTwo);

userTwo.email = "bhavin@gmail.com"
console.log(userOne);
console.log(userTwo);