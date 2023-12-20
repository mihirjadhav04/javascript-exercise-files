// Array Specific Loops

// for of loop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello, World!"

for (const greet of greetings) {
    console.log(`Each Character is : ${greet}`);
}



// Maps - it is an object that holds key-value pairs and remembers the order and no duplicate values are allowed.
const map = new Map()
map.set("IN","INDIA")
map.set("USA","United States of America")
map.set("FR","France")

console.log("MAP:", map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}
// but using the above method you can't iterate the normal object.


