//object
const user={
    username:"tannu",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        //console.log(this);/
//when we refer to current context either 
//user name or price we use this keyword
    }
}

//user.welcomeMessage()//tannnu welcome to website
//if we chnage name
//user.username="sam"//this refers to current value/context
//user.welcomeMessage()//sam welcome to website
console.log(this);//empty{} as node envioronment

//sbse jyada global object on browser is:window]


// function chai(){
//     let username="tannu"
//     //console.log(this);
//     console.log(this.username);//undefined hum isko funcion me use nhi kr paa rhe objects me hi kaam kr ra h yebcontext

// }
// chai()
//jb kisi fun k andr this ko print krte hai node enviorments  me toh we get
//global value structured clone fetchtime etc

// const chai=function(){
//     let username="tannu"
//     console.log(this.username);//undefined
// }
// chai()

//new method arraow funtion
const chai=()=>{//arrow function
    let username="tannu"
    console.log(this);//undefined
    
}
//chai()

//basic arrow fun syntax

//()=>{}

//basic arrow fun
// const addTwo=(num1,num2)=>{
//     return num1+num2//explicit return
// }

///implicit return =jisme paranthesis use nhi krne hote
//implicit=mne man liya likhne ki jrurt nhi
// const addTwo=(num1,num2)=> num1+num2

//another way
//curly braces me wrap kiya toh return keyword use kro
//agr () isme wrap kiya toh nhi likhna return
const addTwo=(num1,num2)=> (num1+num2)
//for objects
//const addTwo=(num1,num2)=> ({username:"tannu"})
//faida of() this paranthesis object me kaam aaega to retunr object({object})

console.log(addTwo(3,4));

// const myArray=[2,3,4,5,6,7]
// myArray.forEach(()=>())//ARRY FUN