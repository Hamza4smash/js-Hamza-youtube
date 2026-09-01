// singleton
//object.create

//object literals=>
const mySym = Symbol("key1")

const jsUser = {
    name: 'Hamza',
    "full name":'Hamza Khan',
    [mySym] : "value1",
    age: 30,
    location:'Delhi',
    email:"hamza@google.com",
    isLoggedIn:true,
    lastLogin:["Monday","Friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);


jsUser.email="hamza@facebook.com"
// Object.freeze(jsUser) 
jsUser.email="Hk1234@gmail.com"
// console.log(jsUser);

// console.log(jsUser["email"]);


// console.log(jsUser)
jsUser.greeting=function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.email}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

