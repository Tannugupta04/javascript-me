//for loop
//syntax
// for (let index = 0; index < array.length; index++) {
    //block scope
//     const element = array[index];
    
// }

//tb tk loop me jao jb tk index ki values array ki length se km h

//variable names index =0  index<array.lengtth iske baad console hoga uske baad index++
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }
//console.log(element);//not accesable outside


//mixing
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best numebr");//phle ye print uske baad 5
//     }
//     console.log(element);
    
// }

//nesting of loops
for (let i = 0; i <=10; i++) {
    ///console.log(`outerloop value ${i}`);
    for (let j = 0; j <=10; j++) {
       // console.log(`inner loop value :${j}and inner loop ${i}`);
      // console.log(i+'*'+j+'='+i*j);//print table
    }
//j k andr i ka acces hai kyukiwe are in scope

}

//array
let myArray=["flash","batman","superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);

    //if we dont write index++ toh condition ek p hi atki rhegi infinitely

    
}


//some keywords like break and continue in loops

// to bfreak the control flowwe use break



// for (let index = 1; index <=20; index++) {
//     //now i want if 5 come i want to come ou tof loop
//     //use 
//     if(index==5){
//         console.log("detected 5");
//         break//iske baad kuch nhi print 
//     }

//     console.log(`value of i is ${index}`);
    
// }

//continue

for (let index = 1; index <=20; index++) {
   
    if(index==5){
        console.log("detected 5");
        continue//ek baar maaf krdo
        //5 print nhi hoga baaki sb print hoga
    }
    console.log(`value of i is ${index}`);
    
}

