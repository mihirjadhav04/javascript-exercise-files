let score = "20a" // it will give NaN after conversion.

// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log(typeof(valueInNumber));


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 10

let someString = String(someNumber)
console.log(someString)

/* 
Basic Conversions:
    "33" -> 33
    "33abc" -> NaN
    true -> 1; false -> 0
    1 -> ture; 0 -> false
    "" -> false 
    "mihir" -> true
*/