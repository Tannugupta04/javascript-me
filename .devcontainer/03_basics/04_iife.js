//IIIFE=Immediately Invoked Function Expressions

//if we want immediate connection with the database
(function chai (){
    //named iife
    console.log(`DB CONNECTED`);

})();

//here first() is place jha hum function define kr re hai
///second paranthesis() if for the execution call

//we will apply parantheis
//chai()
///to avoid pollution due to global scope we use iife

//arow function ki trh write
// ( ()=>{
//     console.log(`DB CONNECTED TWO`);
// })();


(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();
//kyi baar immediatde invoked fun hai invoke toh ho gya bbut is ko pta nhi hoga function rokna kha h
//toh usko rokne k liye we use semicolon
//semicolon upper vale p lgega
//arrow fun
//suppose console loog ek variable expect krta hai

( (name)=>{
    //simple withpout named iifi
    console.log(`DB CONNECTED TWO ${name}`);
})('tannnu');//yha pass kr diya//parameter pas

//2 iife ek sath likho toh use semicolon