//how to  do objects singleton or by constructor

//two method 

//const tinderuser={}

//method 2
//thise 2 methd give same output
///const tinderUser=new Object()
const tinderUser = {}
tinderUser.id = "1234abc"
tinderUser.name = "tannu"
tinderUser.isLoggedIn = false


///console.log(tinderUser);
const regularUser = {
    email: "some@gamil.com",
    //pobjects me objects
    fullname: {
        userfullname: {
            firstname: "tannu",
            lastname: "gupta"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);


//in case of array
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
//const obj3={obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3=Object.assign({} ,obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = { ...obj1, ...obj2 };//here using spread oerator
//best way
console.log(obj3);
//object .assign k through we can assign objects



const users = [
    {
        id: 1,
        email: "abc@gmail.com",
    },
    {
        id: 1,
        email: "abc@gmail.com",

    },
    {
        id: 1,
        email: "abc@gmail.com",
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


//destructoring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "tannu"
}
//we can also use 
///course.courseInstructor it is also right but to make code clean we use

const { courseInstructor: instructor } = course

console.log(instructor);


//some methpds in react

//this is called destructing in react

// const navbar=()=>{

// }
// navbar(company="tannu")

//API'S
//apna kaam kisi or p daalna
//nowa pi me value json me aati h 
//json={}\\
// {
//    " name" : "tannu",
//    " coursename" : "js in hindi",
//    "price":"free"
// }

//api objects mebbhi milti h or array k format me bhi milti hai
//array format
[
    {},
    {},
    {}
]
//one api is very fa,ous ie randomuserme
//like
//{"results":[{"gender":"male","name":{"title":"Mr","first":"Ragendra","last":"da Costa"},"location":{"street":{"number":4454,"name":"Rua da Saudade"},"city":"Taubaté","state":"Paraíba","country":"Brazil","postcode":23994,"coordinates":{"latitude":"-81.1109","longitude":"-41.4608"},"timezone":{"offset":"+7:00","description":"Bangkok, Hanoi, Jakarta"}},"email":"ragendra.dacosta@example.com","login":{"uuid":"c3d73e82-9692-4471-a39f-abcf51788dd0","username":"organiczebra702","password":"came11","salt":"JALktEgi","md5":"20bdd705c4b854f5f5d37b4b0c5a6ab8","sha1":"be6b4f0cfc1032d8d62dfbe7b391bafcbb5465af","sha256":"dba26f2e3a4bb0d30079383514513a831088cfd42b56b36e8e2829ea6e62d233"},"dob":{"date":"1987-01-27T05:11:32.847Z","age":37},"registered":{"date":"2017-09-28T20:38:19.694Z","age":6},"phone":"(30) 4558-8053","cell":"(62) 6969-2423","id":{"name":"CPF","value":"370.577.863-57"},"picture":{"large":"https://randomuser.me/api/portraits/men/94.jpg","medium":"https://randomuser.me/api/portraits/med/men/94.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/94.jpg"},"nat":"BR"}],"info":{"seed":"0c7bcd00361f6c17","results":1,"page":1,"version":"1.4"}}