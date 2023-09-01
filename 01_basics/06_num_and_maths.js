const num = 20
const balance = new Number(20)

// console.log(num);
// console.log(balance);

// console.log(balance.toString().length);
// .toFixed()
// .toPrecision()
// .toLocaleString('en-IN')


// +++++++++++++++++++++++++++++++ MATHS (Library) ++++++++++++++++++++++
// console.log(Math); - run this is chrome console for details

// console.log(Math.abs(-4)); // converts -ve to +ve
// console.log(Math.round(4.6)); // rounds the value to the nearest number.
// console.log(Math.ceil(4.2)); // takes upper value
// console.log(Math.floor(4.2)); // takes lower value

//.min()
//.max()

console.log(Math.random()) // gives value between 0 - 1
console.log((Math.random() * 10) + 1) // multiply with 10 can give value as 0 when it is 0.1
console.log(Math.floor(Math.random() * 10) + 1)


const min = 10
const max = 20


//IMP FORMULA
console.log(Math.floor(Math.random() * (max - min + 1)) + min)