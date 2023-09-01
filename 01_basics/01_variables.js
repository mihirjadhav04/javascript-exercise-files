const account_id = 133445523
let account_email = "jadhavmihir@gmail.com"
var account_password = "12345"
account_city = "Mumbai"

// account_id = 2 - not allowed
account_email = "jadhavbhavin@gmail.com"
account_password = "101010"
account_city = "Jaipur"

let account_state
/* 
If you leave the variable without any value,
then it will have value as undefined.
*/
console.log(account_email);

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/


console.table([account_id,account_email,account_password,account_city,account_state])