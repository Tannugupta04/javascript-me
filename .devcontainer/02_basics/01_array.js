//array

const myArr=[0,1,2,3,4,5]//thse elements can be stirng or numberor can have difffernt dtypes

//array are objects//js array are resizable
//array element cannot be accessd using srbitrary stringg
//zero based indexing
//while doing copy operations they make shallow copy
//shallow copy: of an object is a copy whose properties share the same references(point tothe same underlying values)


//deep copy:do not share the same references


//METHODS to declare array

const myHeros=["shaktiman","naagraj"]
 
const myArr2=new Array(1,2,3,4)//yha hum direct values hi dete 
//console.log(myArr[0]);
//array me hme prototype milta h and el property milti h lenght


//array methods
 
// myArr.push(6)//push in the last
// myArr.push(7)
// myArr.pop()// pop from last


// myArr.unshift(0)
// myArr.unshift(9)//inserted at the start of array
// //sari values shift krni pdti h
// myArr.shift()//no parameter is given an d9 is removed


//to ask question we use includes()
// console.log(myArr.includes(9));

// console.log(myArr.indexOf(9));

//.join
const newArr=myArr.join()// add all the element of an array into a string

// console.log(myArr);
// console.log( newArr);//all values are cpnverted into string which is csv


//slice and splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)//return a copy of a section of an array
//include 1 and 2 not 3
console.log(myn1);
console.log("B",myArr);

//splice

const myn2=myArr.splice(1,3)
console.log("C",myArr);//yha origunal array me se 1,2,3 htt gya jo splic kiya
//original  array hi manipulate ho gya h
console.log(myn2);//outer limit included

