//reduce method


const myNumbers=[1,2,3,4,5,6,7,8,9,10]
//i want to add 10 to each  numberof array

//const newNums=myNumbers.map((num)=>num+10)

//map function is also a callbakc function 
// map function return while for each doea not return
//console.log(newNums);


///chaining== using 2-3 methods directly
const newNums=myNumbers
                .map( (num)=>num*10)
                .map((num)=>num+1)//yha nya no. aaya vhi aaega
                //can use filter also
                .filter((num)=>num>=40)
console.log(newNums);

