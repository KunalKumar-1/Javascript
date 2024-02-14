const accountId = 144235;
let accountEmail = "kunaldevspro@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState; //defaultly undefined

// accountId = 2 not allowed

accountEmail = "he@gmail.com";
accountPassword = "343435554";
accountCity = "Bengaluru";

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*NOTE: Prefer not to use "var",
because of issue in block scope and functional scope  */
//Use let insted...

/* Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

-> Automatically
-> Using var (mostly not preffered The 'var' keyword was used in all JavaScript code from 1995 to 2015)
-> Using let
-> Using const , for constant 
*/ 

x = 5;
y = 4;
z = x + y;
console.log(z);

const price1 = 5;
const price2 = 20;
let total = price1 + price2;
console.log(total);
