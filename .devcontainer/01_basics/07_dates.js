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