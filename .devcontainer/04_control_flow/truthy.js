// some values are already assumed either truth or false
// these true values are truthy and false valuse are falsy

const userEmail="t@tannu.ai"

//if we have empty string here
//const userEmail="" then it is false

//empty array
//const userEmail=[] it is true so if statement execute


if (userEmail){//hmare pas value thi hmne use kr liya firect or el
    //string ko hi truthy value hai"t@tannu.ai

    console.log("got user email");
}
else{
    console.log("do not have user email");
}


//rules to check the truthy value and falsy values

//falsy values inke alava sb truthy values
//false,0,-0, BigInt(0n),"",null,undefined,NaN

//truthy values
//[],"0","false"," "(space in string),{}(empty object),function(){}(empty fun)

//using array
// if (userEmail.length===0){
//     console.log("Array is empty");
// }

//to  check object is empty

// if (Object.keys(empty.obj).length===0){
//     //check its keys
//     console.log("object is empty");}


//false==0(compare)that is true
// false=="" it will be true
// 0==" " true


//nullish coalecing operator(??) baesd on null and undefined totally

//let val1;//u=nothing assigned
//val1 =5??10//output=5
//what is the gain of ?? kbhi kbhi database se call kremge ya firebse ka use krege
//toh we dont get direct response hme 2 valuse milti hai toh chances hai hmare pas null respone aa jae ya aaae hi na toh usse hmara pura code structure preshan ho jata hai
//un cases se deal krne k liye

//val1=null??10//10 output but we uss some fun
//val1=undefined??15//op=15

///suppose first fun return nul seond 10 and third 20
//


//Terniary operator

//condition ? true(statementjo ecxecute krvana):false

const iceTeaaPrice=100
iceTeaaPrice<=80?console.log("less than 80"):console.log("more than 80");