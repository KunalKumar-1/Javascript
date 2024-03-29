// Primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt 

cosnt score = 100
const scoreValue = 100.4

const isLoggedIn = false 
const outsideTemp = null
let userEmail;//undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 4534341656515354643553n



/* Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.*/



// Reference (Non Primitive)

//Arrays , Objects, Functions  

//array
const heros = ["chadiman", "naagraj", "doga"]

let myObj = {
    name:"kunal",
    age:18,
}


const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myFunction)

//docs: https://262.ecma-international.org/5.1/#sec-11.4.3

/* Table 20 — typeof Operator Results
Type of val	                               |   Result
------------------------------------------------------------------------------------
Undefined:	                               |  "undefined"
Null:	                                   |  "object"
Boolean:                                   |  "boolean"
Number:	                                   |  "number"
String:                                    |  "string"
Object 
(native and does not implement [[Call]]):  |"object"
Object (native or host and does implement [[Call]]):"function"
Object (host and does not implement [[Call]]):Implementation-defined except may not be "undefined", "boolean", "number", or "string". */

//stack (occuers in Primitive datatype )--> gives the copy of values ,  Heap (occurs in Non-Primitive Datatype)--> gives the reference of actual value

let myTwitter = "@kunaltwts"
let anotherTwitterId = myTwitter
anotherTwitterId = "kunal-kumar"

 console.log(myTwitter);
 console.log(anotherTwitterId);


 let userOne = {
    email: "userEmailId@gmail.com",
    upiId: "username@yonosbi"
 }

 let userTwo = userOne

 userTwo.email = "kunaldevspro@gmail.com"
// due to "heap" the changes made in userTwo.email will also change the changes in userOne.email
 console.log(userOne.email);
 console.log(userTwo.email);