// function sayMyName(){
//     console.log("A")
//     console.log("N")
//     console.log("U")
//     console.log("K")
//     console.log("R")
//     console.log("I")
//     console.log("T")
//     console.log("I")
// }
// sayMyName()
// // function addTwoNumbers(number1,number2){
// //     console.log(number1 + number2)
// // }
// function addTwoNumbers(number1,number2){
//     let result = number1 + number2
//     return result
// }
// const result = addTwoNumbers(3,8)
// console.log(result)


// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("Please enter a username")
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Anukriti"))


//rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))

const user={
    username :"anukriti",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username : "Sam",
    price:399
})

const myNewArray=[200,400,100,600]
function returnSEcondValue(getArray){
    return getArray[1]
}
console.log(returnSEcondValue(myNewArray))