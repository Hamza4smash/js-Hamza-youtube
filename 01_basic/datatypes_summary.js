// primitive datatypes
    // 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score= 100
const scoreValue= 100.5

const isLoggedIn= false 
const outsideTemp= null
let playerName;

const id= Symbol("123")
const otherId= Symbol("123")

// console.log(id ===otherId);

// const largeNumber= 34232352353253545432n





// Reference (Non primitive)
    // Array, Object, Function

const legends= ["Messi", "Ronaldo", "Neymar"];

let myObj= {
    name: "hamza",
    age: 25,

}

const myFunction= function(){
    console.log("Hello World");
}

// console.log(typeof legends);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack (primitive), heap(non-primitive)

let myYoutubename= "hamzakhandotcom"

let anotherName=myYoutubename
anotherName="khushdil"

// console.log(anotherName);
// console.log(myYoutubename);

let userFirst={
    email:"hamza@google.com",
    upi:"hamza@ybl"
}

let userSecond=userFirst

userSecond.email="khushdil@google.com"

console.log(userFirst.email);
console.log(userSecond.email);

