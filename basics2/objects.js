//object literals

const mySym = Symbol("key1")

const jsUser = {
    name  : "Hitesh",
    "full name":"rajput",
    [mySym]:"mykey1",
    age : 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email="hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email="hitesh@microsoft.com"
console.log(jsUser)
jsUser.greetings=function(){
    console.log("Hello JS user")
}
jsUser.greetings2 = function(){
    console.log(`Hello JS user1,${this.name}`)
}
console.log(jsUser.greetings)
console.log(jsUser.greetings2())
console.log(jsUser.greetings())