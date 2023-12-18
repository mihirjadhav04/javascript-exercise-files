

// {} - scope 
//global scope

if (true) {
    //block scope
    let a = 10
    const b = 20
    var c = 30 // can be accessed outside the scope.
}

// console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username = "mihir"

    function two(){
        const website = "youtube"
        console.log(username);
    }
     
    two()

}

one()


// ************ interesting ***********************

function addOne(num){
    return num + 1
}

console.log(addOne(5));









