// let a=10
// const b=20
// var c=30
//yha tkk oi dikkt nhi aai dikkt kha aegi jha {} ye aa jae isko khte h scope


// lets say user yha likhta h
///var c=300
//it will be problem

let a =300//ab a =300 jhi hoga
//this value of a is titally independent of the function below
if (true) {

    let a = 10
    const b = 20
    console.log("INNER:",a);//output=10    //var c=30//creates problem so wewill not use var
    //global scope me jo value klikhte h vo scope k ndr hoti h
    ///lekin local scope k andr vali value bhar nhi jani chaiye
    //ye ab yhi andr aane chahiye bhar nhi

    //everythng inside if is block scope
    //outside if that is global scope
}
console.log(a);
//console.log(b);not definedn
// console.log(c);//it will be printed ye oroblematic h


//jb hum windows me console me jake scope check krenge tb alg 
//scope hai or hum jb code enviornment me jake scope check kre toh global scope alg hai