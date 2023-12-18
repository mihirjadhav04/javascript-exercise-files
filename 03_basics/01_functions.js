//fucntion definition
function demoFunction(){
    console.log("This is just the demo funciton!")
}


//function execution/reference
// demoFunction()


// function addTwonumbers(n1, n2){
//     let result = n1 + n2
//     return result
// }


// const result = addTwonumbers(3,4)
// console.log(result);


function loginUserMessage(username = "mihir"){
    if(username === undefined){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in.`
   
}

console.log(loginUserMessage("Mihir Jadhav"));



//SITUATION : Shopping Cart Example

//Here we don't know how much parameters can come in the cart for calculation.
//So here we user REST OPERATOR
function calculateCartPrice(va1,...cartPriceList){
    return cartPriceList
}

console.log(calculateCartPrice(200,300,400,500));