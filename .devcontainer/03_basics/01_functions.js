// console.log("t");
// console.log("a");
// console.log("n");
// console.log("u");

//to avpid this writing again and again we use fucntions


function sayMyName(){
    console.log("t");
    console.log("a");
    console.log("n");
    console.log("u");

}
//sayMyName=it is reference
//sayMyName()=execution
//sayMyName()


// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);//oputput=NaN(not a number)
//     //js me hme datatype likhne ki jrurt nhi h js khud dimag lgaegi
// }




//addTwoNumbers(3,4)output=7
//addTwoNumbers(3,"4")//oytput=34




// paramters
//when we define the fun the input we take are parameters


//arguments
// input taken when we calll the functions are  the arguments

function addTwoNumbers(number1,number2){
    //one method
    let result=number1+number2//this willl give actual value not undefined
    return result
    //return k baad koi kaam nhi hoga

    //another method
    //return number1+number2

}
const result=addTwoNumbers(3,5)
//console.log("Result:",result);


/// different methods to ttake arguments


function loginUserMessage(username="sam"){
    if(!username)//if(username===undefined)if(!username)means false
    {
        console.log("please enter user name");
        return
        

    //in js an "empty string" an "undefined" are considered to be false value
        //return likhne ka mltb iske baad kuch kaam nhi krega
    }

    return `${username} just logged in`
}

//console.log(loginUserMessage("tannu"))
//if koi value hi pass nhi ki hoti toh kya hota

//console.log(loginUserMessage());//undefined


// to abois this kind of bevhaviour where no argumemts are given then 
//give some default values in function definition like here we gave "sam"
//iski minimum value sam hai




// when we do not know how many arguments willl come this situation come frequently
function calculateCartPrice(...num1)//function calculateCartPrice(val1,val2,...num1)
//val1=200,val 2=400,baki ka num1
{
    return num1


}
//console.log(calculateCartPrice(200,400,500,2000))//willl givearray


//isme hmara phli value to aa gyi hai pr baki sbko lane k liye we use
//rest operator i.e(...) also called spread operator inke use case inko differ krta h kb rest kb spread

//using objects
const user={
    username:"tannu",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}
    and price is ${anyobject.price}` );
}
//handleObject(user)
handleObject({
    //can pass object
    username:"sam",
    price:399
})
//we can directly pass object jruri nhi ki hum phle object bna k hi pass kre


// we can also pass arrays
const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]//first index

}
//console.log(returnSecondValue[200,400,500,1000])
console.log(returnSecondValue(myNewArray));