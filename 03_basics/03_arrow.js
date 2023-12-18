
// arrow fucntion example which refers to the current context.
const user = {
    username: "mihirjadhav04",
    price: 899,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to websie!`)
        console.log(this);
    }
}


// user.welcomeMsg()
// user.username = "mihir"
// user.welcomeMsg()

// function sample(){
//     console.log(this);
// }
// sample()

console.log(this);
//it points the global object which is empty as on the global level the context is not defined.



// this works in objects and not functions

// const sample = function (){
//     console.log(this);
// }
const sample = () => {
    console.log(this);
}
sample()



// arrow function examples:

const addNum = (num1,num2) => {
    return num1 + num2 
}


// const addNum = (num1,num2) => ( num1 + num2 )  : IMPLICIT RETURN EXAMPLE





