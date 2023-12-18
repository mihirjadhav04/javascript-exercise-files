// Immediately Invoked Function Expressions(IIFE)


//Due to the global scopes pollution which in the case shouldn't affect the fucntion so we use iffe
(function coffee(){
    console.log(`DB CONNECTED!`);
})();

// ; : here semi-colon is require to end the code as it does not know how to end.
//()()

//First () - is for fucntion defination.
//Second () - is for function execution.


(() => {
    console.log("DB CONNECTED 2!");
})();