// primitive datatypes
    // 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score= 100
const scoreValue= 100.5

const isLoggedIn= false 
const outsideTemp= null
let playerName;

const id= Symbol("123")
const otherId= Symbol("123")

console.log(id ===otherId);

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

console.log(typeof legends);
