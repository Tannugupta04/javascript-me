//objects
//for in loop

const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}
//last file me ye loop objects p kaam nhi kr rha tha
//here we are solivng the problem
// so fot this we use forin loop

for (const key in myObject) {
    //console.log(key);
    
    
//this is how we acecs all keys in object
//to get object
//console.log(myObject[key]);
//proper way
//console.log(`${key} shortcut is for ${myObject}`);


}

///checking  if for in loops works on array or not

const programming=["js","rb","py","java","cpp"]
for (const key in programming) {

    //console.log(key);//output=0,1,2,3,4,5
    //console.log(programming[key]);//will give us values
    //gives us array ki keys
    // objects aaya hi tbt ha jbye problem thi ki array ki keys only numebrs me hoti hai ttoh introdyced objects jitnki keys kcuh bhi ho skti hai

}

////check whether it works on maps or not

// const map=new Map()
// map.set('IN',"India")//key and value
// map.set('USA',"United States Of America")
// map.set('Fr',"France")

// for (const key in map) {
//     console.log(key);
//     //map is not iteratable so not output

// }