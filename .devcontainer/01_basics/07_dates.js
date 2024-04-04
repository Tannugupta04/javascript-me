//Date:it represent  single moment in time in a platform-independent format.
// this moment start from the january 1970 after this dates are calculated
//calculated in milisecond from 1st january 1970
//TC39 is working on temporal, a date/time api
//tempral is a proposal to make this api as aglobal object
//date has been a long standinf pain point in ecmas
//that was proposal now we will learn it by exixting method


//let myDate=new Date()//this is date ka object
//console.log(myDate);

//how to use date
//converting in string
let myDate=new Date()//this is date ka object
console.log(myDate.toString());//Wed Apr 03 2024 14:25:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Wed Apr 03 2024
console.log(myDate.toLocaleDateString());//4/3/2024
console.log(myDate.toLocaleString());//4/3/2024, 2:25:53 PM
console.log(myDate.toTimeString());//14:25:53 GMT+0000 (Coordinated Universal Time)

//1.type of date
console.log(typeof myDate);//object

//2.to declare specific date

//let myCreatedDate=new Date(2023,0,23)
//console.log(myCreatedDate.toDateString());//Mon Jan 23 2023//months starts from xzero in js

//3.another method to declare date

// let myCreatedDate=new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());//1/23/2023, 5:03:00 AM

//4.to get dates in a format of yy/mm/dd

// let myCreatedDate=new Date("2023-01-23")
// console.log(myCreatedDate.toLocaleString());

//5.another format mostly used in india
let myCreatedDate=new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

//6.time stamps:to find the exact time stamp for example quizez in js and poll desined in js

let myTimeStamp=Date.now()
console.log(myTimeStamp);//v 1712205193232 in mili second
//7.to get the value
console.log(myCreatedDate.getTime());
//8. to convert in seconds
console.log(Math.floor(Date.now()/1000));//INTERVIEW QUESTION TO CONVERT MILI SEC IN SECONDS
//to avoid points/decimal we use math.floor
//output in seconds =1712205447

//9.
let newDate=new Date()
console.log(newDate);//2024-04-04T04:41:43.255Z
console.log(newDate.getDate());//4

console.log(newDate.getDay());//4
console.log(newDate.getHours());//4
console.log(newDate.getFullYear());//2024
console.log(newDate.getMinutes());//41


///mostly usd method

newDate.toLocaleString('default',{
    weekday:"long",
    


})
//default k baad object likhte h