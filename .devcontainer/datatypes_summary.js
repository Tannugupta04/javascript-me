//primitive

//7 types:string,number,boolean,null,undefined,symbol,bigint
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null

let userEmail=undefined;//undefined

const id = Symbol('123')
const anotherId=Symbol('123')
// these both are differnt

const bigNumber=2345556678899766n//bigint




//non-primitive(reference):Arrray,objects,functions

//array
const heros=["shaktiman","naagraj","doga"]

//object
//objects are in curly braces and key value pair
//every thing inside curly braces are object they can either be fun,array,bool,any other obj etc
let myObj={

    name: "tannu",
    age : 22,
}

//function
// there are many ways to declare a function now we are talking about variable vala tarika
//in js fun can also be treated as variable
const myFunction=function(){
    console.log("Hello World");

}

//to check datatype
//console.log(typeof outsideTemp)//object
//console.log(typeof heros);//object
//console.log(typeof id );//symbol
//console.log(typeof userEmail)//undefined
//console.log(typeof myObj)//object
//console.log(typeof myFunction)//function object



//::the return type of all non primitive type is always object


