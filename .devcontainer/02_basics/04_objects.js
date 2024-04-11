//how to  do objects singleton or by constructor

//two method 

//const tinderuser={}

//method 2
//thise 2 methd give same output
///const tinderUser=new Object()
const tinderUser={}
tinderUser.id="1234abc"
tinderUser.name="tannu"
tinderUser.isLoggedIn=false


///console.log(tinderUser);
const regularUser={
    email:"some@gamil.com",
    //pobjects me objects
    fullname:{
        userfullname:{
            firstname:"tannu",
            lastname:"gupta"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);


//in case of array
const obj1={1:"a",2:"b"}
const obj2  ={3:"a",4:"b"}
//const obj3={obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3=Object.assign({} ,obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3={...obj1,...obj2};//here using spread oerator
//best way
console.log(obj3);
//object .assign k through we can assign objects



const users=[
    {
    id:1,
    email:"abc@gmail.com",
},
{
    id:1,
    email:"abc@gmail.com",

},
{
    id:1,
    email:"abc@gmail.com",
},
]

//arrray me bhut sare objects hai usko loop thorugh krna ya value print krna aesse hi use krna hoga
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//output value of datataype =array
//here we have put all keys in an array  we can apply loop on that array and do many more operatins easuly
console.log(Object.values(tinderUser));

//enteries
//each key value converted in an individual array
console.log(Object.entries(tinderUser));

//so,etime times when we loopthrough then if value does not eixts then
//it makes chances of crash  so we ask it like
///hasownproperty
console.log(tinderUser.hasOwnProperty('isLogged'));