/*
In general data types are categorised into two main categories :
Primitive and non-primitive , the difference between them is how data is 
stored in the memory and accessed from memory.
Primitive(They are call by value , the changes that we made are done in the copy).
There are 7 categories : String , Number , Boolean , null , undefined , symbol , BigInt

Non-Primitive or reference types (They are call by reference , the memory address is passed)
Array , Objects , Functions

Javascript is dynamically typed means we do not have to write the data type of the variable. 
The node will automatically assign it the data type.

 */

const score =100
const scoreValue = 100.3
const isLoggedIn= false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)

const heroes = ["Shaktiman" , "naagraj","doga"]
let myObj=
{
    name:"anukriti",
    age: 22
}

const myFunction=function(){
    console.log("hello");
}

