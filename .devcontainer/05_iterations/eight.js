//reduce method:bhi call back hota 

//isme accumulator milta and currentvalue milti
//current value=jo value array ki chl ri h
//accumulator=ek khali empty value di jati hai
//phli baaar loop chala toh accumulator have 0  takes initiL value//or ek baar hi puchta hai  value kya hai uske baad jo bhi curr and acccka sum aaya hai usko accumuator me daal deta hia

const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval :${currval}`);


//     return acc+currval
//output acc:0 and currval :1
// acc:1 and currval :2
// acc:3 and currval :3
// 6
// },0)///this 0 is the value of accumulator
// console.log(myTotal);//6


//write using arrrow fun

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)//0 is value of acc


//console.log(myTotal);



//example
const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data scientist course",
        price:12999
    },

]
    //introducing functionaly ki shooping cart me jitne item h unke price ko add kr do
const priceToPay=shoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(priceToPay);
