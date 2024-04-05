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

const obj3=Object.assign({} ,obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);




