const name = "mihir"
const repoCount = 30

// console.log(name + repoCount + "Value");


//String Interpolation.
// console.log(`Hello! My name is ${name} and my repo count is ${repoCount}.`);

//another method to define string - use this is dev tools chrome to check.
const fullname = new String("MihirJadhav")
// console.log(fullname);
// console.log(fullname.__proto__)
// console.log(fullname.length)
// console.log(fullname.toLowerCase())
// console.log(fullname.charAt(2))
// console.log(fullname.indexOf("r"))

const sliced_fname = fullname.substring(0,4)
console.log(sliced_fname);

const sliced_fname2 = fullname.slice(-10,2)
console.log(sliced_fname2);

// .trim()
// .replace()
// .includes()
// .split()

// READ ABOUT STRING FUNCTIONS AND MAKE A LIST WITH FEW COMMON!


