//for each loop
//mostly used
//it is higher order fun
const coding=["js","ruby","java","python","cpp"]

//coding.forEach()//it is call back fun mtlb ye khra h merko function dedo mujhe kya krna hai
//call back function ka naam nhi hota hia
//hr jis value p jaega usko hum kya bolte hai vo aaega ()isme
//hr baar execute hoga
coding.forEach( function (val){
    //console.log(val);
})

//another way to write same fun  here as arrow fun
coding.forEach(()=>{
    //console.log(item);
})//basic cal back fun by arrrow fun removed name

//another way is declare fun after that print
function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)


//some other 
coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})
//for each not only have acces of one oaramter only it have many more
//jaise here ietm,index and arr

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//the scenerio we discussed before is
//[{},{},{}] objects inside array
///this scenerio is commonly used  forEach


const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"

    },//we can declare more by using commma

    {
        languageName:"java",
        languageFileName:"java"

    },
    {
        languageName:"python",
        languageFileName:"py"

    }
]


//()=>{} callback
myCoding.forEach( (item)=>{
    console.log(item.languageName);
})
