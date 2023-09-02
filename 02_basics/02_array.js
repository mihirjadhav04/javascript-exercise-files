const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]



// .push()
// .concat()

// const new_array = marvel_heros.concat(dc_heros)

// console.log(new_array);
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]



//spread operator - ...
const allHeros = [...marvel_heros, ...dc_heros] 
console.log(allHeros);
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]



const another_array = [1,2,3,[4,5,6],7,[8,9,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// .isArray()
// .from() - but becomes interesting when tried to create array from objects directly.