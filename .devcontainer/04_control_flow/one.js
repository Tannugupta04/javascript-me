//hmesha pura code execute nhi hona chahiye kuch na kuch conditionals pe run hona chahie
//for example agr hum login hai toh kuch code run ho agr logout ho toh alg
//this is called control flow or logic flow

//first control flow==If
// if (condition){

// }//ye conditon truw honi chahiye to hi internal code execute hoga
//if condition==true then execute if false then  not execute


//comparision krne pdenge to evaluate true or false

// const isUserLoggedIn=true
// if(isUserLoggedIn){

// }
//comaprison operator(<,>,<=,>=,!=,==,===,!==(check negqative))
// if(31=2){
//     //evaluation will be true
// }

//=== it also checks type//also known as strict equal to check datatyope if impt
// if (2==="2"){
//     console.log("executed");
// }
// const temperature =41
// if(temperature<50){
//     console.log("less than 50");
// }
// else{


// console.log("temperature is greater than 50");
// }
// console.log("execute");

//scope relate
//block scope

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`user power:${power}`);
// }
// console.log(`user power:${power}`);//here we will get an error as power is not defiend 
//out of scope


//short hand notataion 
//implicit scope

//const balance=1000
// if(balance>500) console.log("test");

//yha curly braces nhi lgae ye hota hai implicit scope
//implicit =maan lete hai yha scope hai
//it execute only in one line to write another we use comma as well
// but copmma not recommended


//nesting
// if (balance<500){
//     console.log("less than");
// }
// else if(balance<750){
//     console.log("equal to 750 ");

// }
// else if(balance<900)
// {
//     console.log("greater than 750");
// }
// else{
//     console.log("less than 1200");
// }

//real life implementation

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn &&debitCard&&2==2){
    //when we want to check both so this && operator check both of them
    //if we want to check another condition rthen add it after &&using this
    console.log("Allow to buy course");
}
// the pipe(|| sign is used to check mu,tiple condition act as or operator

if(loggedInFromEmail||loggedInFromGoogle)//ya toh toh login emails es krlo ya google se
   { console.log("User logged in");
}

//we can check multiple conditions
