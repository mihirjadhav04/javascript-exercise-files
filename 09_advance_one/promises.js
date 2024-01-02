// fetch('http://www.google.com').then().catch().finally()


// Q and BlueBird Library 

// //METHOD 1:
// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task.
//     // DB calls, cryptography, network tasks.

//     setTimeout(function(){
//         console.log("Async task complete.");
//         resolve() // to be written to connect resolve with .then()
//     },1000)
// })

// //.then() is connected to reolve which get us a callback function and gives the return value.
// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })



// METHOD 2:
// new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("Async Task 2.");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved.")
// })


// METHOD 3:

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({
//             username: "Chai",
//             email: "mihirjadhav@gmail.com"
//         }) // here you can pass the data object too to get access it into .then()
//     },1000)
// })


// promiseThree.then(function(userData){
//     console.log(userData);
// })


// METHOD 4:

const promiseFour = new Promise(function(resolve, reject) {
   setTimeout(function(){
    let error = false
    if (!error) {
        resolve({
            username: "Mihir",
            email: "mihirjadhav@gmail.com",
            password: "mihir@123"
        })
    }
    else {
        reject("Error: Something went wrong!")
    }
   }, 1000) 
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>{console.log("Your promise is either resolved or rejected.");})



// //METHOD 5:
// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({
//                 username: "Mihir",
//                 email: "mihirjadhav@gmail.com",
//                 password: "mihir@123"
//             })
//         }
//         else {
//             reject("Error: JS went wrong!")
//         }
//        },1000) 
// })
// mostly can be used where you want to go ahead only when there is a successful db connection.
// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch(err){
//         console.log(err);
//     }
// }


// consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch("https://randomuser.me/api/")
//         // console.log(response);
//         const data = await response.json() // here also await needs to be added as conversion to json will take time too.
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }

// }

// getAllUsers()

// xhr-request() --> requests() --> fetch()  


fetch("https://randomuser.me/api/")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((err) => console.log(err))

const promiseRequest = new Promise(function(resolve,reject){
    const response = fetch("https://randomuser.me/api/")

})