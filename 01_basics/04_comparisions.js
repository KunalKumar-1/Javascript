console.log(2>1) // true
console.log(2<1) //false
console.log(2>=1) //true
console.log(2==2) //true
console.log(2!=1) //true



// console.log("2" > 1)
// console.log("02" > 1)

//NOTE: Generally we avoid this type conversion 
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) // true 
/*The reason is that an equality check == and comparisons >,<,<=,>= work differently
here, Comparisions convert null to a number, treating it as 0.
That's why "console.log(null >= 0)" is true and null > 0 is false  */

console.log(undefined == 0);//false
console.log(undefined < 0);//false
console.log(undefined > 0);//false
console.log(undefined <= 0);//false
console.log(undefined >= 0);//false


//  === strict check(also compares the data type)

console.log("2" === 2); //false because "2"=>is string & 2 is integer

