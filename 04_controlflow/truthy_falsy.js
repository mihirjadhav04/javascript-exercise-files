// TRUTHY VALUE : "0", "false"("string")," ", [], {}, function(){} - empty fucntion

// FALSY VALUES : false, 0, -0, BigInt (0n), "", null, undefined, NaN

const userEmail = "m@gmail.com"

if (userEmail){
    console.log("Got the user email.");
}
else{
    console.log("Don't have user email.");
}


// to check object is empty or not
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Empty Object!");
}





// Nullish Coalescing Operator (??) : null undefined

let val1;

// val1 = 5 ?? 10

val1 = null ?? 10 // instead of 10 we can use some function of db.

console.log(val1);


// Terniary Operator [condition ? true : false ]

