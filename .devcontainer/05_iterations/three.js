//for of loop

// these are array specific loops
//some commom scenerios are
//["","",""]//string inside array
//[{},{},{}]//objects insidde array

const arr = [1, 2, 3, 4, 5]
//for of loop
//objects ,string and array are iterable
// for (const iterator  of objects) {
//     //itertor is i or any other  variable name
//     // here objet is tht on which loop lga rhe and ye js k object se alg hai


// }
//here object is array

for (const num of arr) {
    //console.log(num);

}
//no declaration no increament no decreament
//this loop can be applied on string as well not only objects
const greetings = "Hello world"
for (const greet of greetings) {
    if (greet == " ") {
        continue
    }//space will not be printed

    //i ,j  can be taked instread of greet
    //console.log(`Each character is ${greet}`);

}


//Maps in javascript
const map=new Map()//map is object in js
// to set values
map.set('IN',"India")//key and value
map.set('USA',"United States Of America")
map.set('Fr',"France")

//console.log(map);
//applying for of loop
for (const [key ,value]of map) {
    console.log(key,':-',value);
    
}

const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
//     //error: my bject is not iterable

// }//not working here

//maps: is an object which hold a key value pair
//remember the insertion order of the keys  any value-
//(both ibject and the primitive values may be used ad either keyor a value)
//no duplicate values


