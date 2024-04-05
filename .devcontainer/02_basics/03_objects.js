//objects can be declared in 2 methodss
//1. like literals  and 2ns i like constructors
//one methods is singleton

//singleton aqone trh ka ek hi objevct hai if we make any object using constructor then we get singleton

///like 
//object.create
//object literals 

//declaration of symbol
const mySym=Symbol("mykey1")

//declaratiion of objcts
const JsUser={
    //everything inside curly braces is object
    name:"tannu",
    //bydefault syestem is taking name as "name"\
    "full name":"Tannu gupta",//we can not access this value by dot operator

    //using symbol in obj

   // mySym:"mykey1",     //not getting used as symbol so here is problem as datatype is no ssymbol
    //so to use it as symbol we have to write it in square bracket
    [mySym]:"mykey1",  //abhi actual me hum upper vale symbol ko hi use krre

    age:18,
    location:"Jaipur",
    email: "tannu@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

//we can give it any value array ,objects etc

}
//we have key and values in objects

//access
//one method
console.log(JsUser.email);
//another method to access
console.log(JsUser["email"]);
console.log(JsUser["full name"]);//only can be done  by this method
console.log(JsUser[mySym]);

//console.log(JsUser.fullname);//undefined


//how to chnage value

JsUser.email="tannu@chatgpt.com"
//if we want thT NOBbody can chnge value we use freeze  method

//Object.freeze(JsUser)

// now np chnge will be applied
JsUser.email ="tannu@microsoft.com"
console.log(JsUser);

//adding fun
JsUser.greeting=function(){
    console.log("hello JS user");
}
JsUser.greeting2=function(){
    console.log(`hello Js user,${this.name}`);
    //jb hum this lgate hai toh
    //jo bhi properties hai name me ya kisi or object me sari aa jaegi
}

//console.log(JsUser.greeeting)//undefined
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

// we access symbol and string in square brackets
