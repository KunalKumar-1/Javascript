let score = "25";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score); //convert
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "kunal";

let booleanIsLoogedIn = Boolean(isLoggedIn);
console.log(booleanIsLoogedIn);

//for boolean conversion (outcomes)
// 1 => true ; 0 => false
// "" => false
// "kunal" => true

let sumNumber = 33;
let stringNumber = String(sumNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// ***************************************** Operations **********************************************

let val = 3;
let valNegative = -val; //changes to negative
console.log(valNegative);

console.log(2 + 2); // adding
console.log(2 - 2); //subtract
console.log(2 * 2); //multiply
console.log(2 ** 3); //power
console.log(2 / 2); //divide
console.log(2 % 3); //modulus

let string1 = "hello";
let string2 = " world";
let str3 = string1 + string2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

//confusing operations which decreases readebility of the codes
console.log(+true);
console.log(+"");

let num1, mun2, num3;

num1 = mun2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

//https://tc39.es/ecma262/#sec-toprimitive
// Docs for Expressions and operators  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
