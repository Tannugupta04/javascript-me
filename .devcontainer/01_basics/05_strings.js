const name="tannu"
const repoCount=50

//to concatenate
//console.log(name+repoCount+"value");
//this syntax is quite outdated

//modern syntax 
console.log(`helllo my name is ${name} and my repoCount is ${repoCount}`)
//isme hum place holders bnate h jha jha variable insert krna 
//vha vha ${} ye use kro


//an other way to declare string

const gameName=new String("tannu-tg")
//here string is an object not array
//when we use new keyword we use objects of the jsname is inside the constructor
console.log(gameName[0]);//accccess
//another method to access
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());//it haas com=nverted all in upper case

//to check the charcater on any position
//let us check the character at 2nd position
console.log(gameName.charAt(2));

//to check the position of the character
console.log(gameName.indexOf('t'));

//slicing or dividing in substring
const newString=gameName.substring(0,4)
//last value not included 4 ias not included
//.substring ignore the negative value
console.log(newString);


//.slice here we cqn give the negative value as well
//negative me reverse se shuru hoga
const anotherString=gameName.slice(-7,4)
console.log(anotherString);

//.trim() methd  to remove the unwanted spaces
const newStringOne="    hitesh        "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace()method  here to replace this %20
const url ="https://tannu.com/tannu%20gupta"
console.log(url.replace("%20","-"));
//here first value shows what to replace and second value 
//shows to which it is replaced by


//we can ask questons as well
//.includes
console.log(url.includes('tannu'));//asking tannu is present or not in url


//to convert the string in array or a string split in different parts based on dash/spaces/pr anything

console.log(gameName.split('-'));
//we need a seperator and a limit

//at
console.log(gameName.at(2));//it tells the charcter at the position porvided

//blink
console.log(gameName.blink());

//big
console.log(gameName.big());



