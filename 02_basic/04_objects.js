// const  tinderUser = new Object()  //singleton
const tinderUser={}    //non singleton


tinderUser.id="123hamza"
tinderUser.name="Hamza"
tinderUser.isLoggedIn=false


// console.log(tinderUser);

const regularUser={
    email:"human@gmail.com",
    fullName:{
        playername:{
            firstName:"Hamza",
            lastName:"Khan"
        }
        
        }
}

// console.log(regularUser.fullName.playername);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj4={obj1,obj2,obj3}
// const  obj4=Object.assign({},obj1,obj2,obj3)
const obj4 ={...obj1,...obj2,...obj3}
// console.log(obj4)

const user=[
    {
        Sno :1,
        email:"human@gmail.com"
    },
    {
        Sno :2,
        email:"animal@gmail.com"
    },
    {
        Sno :3,
        email:"bird@gmail.com"
    },
    {
        Sno :4,
        email:"ocean@gmail.com"
    }
]

user[1].email
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));