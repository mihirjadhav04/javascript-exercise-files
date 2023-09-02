// array
// JS arrays are resizable, and can be accessed by index.

const myArr = [0,1,3,4,5,6]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[2]);



// Array Methods

// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift("mihir")
// myArr.shift()
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // converts our array to string.


// console.log(myArr);
// console.log(newArr);


// slice , splice : 
// remeber which operations manipulates our orignal array
// and which operation does not manipulate our original array.

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)


console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C" , myArr);
console.log(myn2);
