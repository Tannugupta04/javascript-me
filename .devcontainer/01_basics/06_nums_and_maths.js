//numbers
const score=400
//console.log(score);//output=400
//is score ka type h numver 
// also we can define explicitly 
//now it is 100% number
const balance=new Number(100)
//console.log(balance);//output is like=number:400

////conversion to string 
//console.log(balance.toString());
//console.log(typeof balance);//object'

//find length 
//console.log(balance.toString().length);

//to make things fixed
// to fix the predcesion value after point specailly used in ecommerce web
//console.log(balance.toFixed(2));


//to use some number
const otherNumber=23.8966
//console.log(otherNumber.toPrecision(3));
const otheroneNumber=123.8966
//console.log(otheroneNumber.toPrecision(3));

const hunderds=1000000
//commas lge hue aate h according to indian Maths
//console.log(hunderds.toLocaleString('en-IN'));



// ++++++++++++++++Maths++++++++++++++++++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4)); //  absolute it convert the negative value to positive 
//console.log(Math.round(4.3));//it round off the value

///in rounding off ki value upper ya lower vali choose hoti we have 2 methods

//console.log(Math.ceil(4.2));//if  jra sa bhi bda hua 4 se to top value i.e 5
//console.log(Math.floor(4.2));//it takes floor value that means in 4.2 it will take 4 

// we can directly use math library for so many maths operation

//to find the minimum value in an array

// console.log(Math.min(4,3,6,8));
// console.log(Math.max(3,4,6,8));


//sbse jyada math library use kha hoti h 
//math.random()=give NY Rndom value between 0 and 1

console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);
//to get the small value it os wrapped in math.floor()
//to avoid the problem of getting 0 in case of 0.04or something like that we add 1 to it

//lets say i want some value between 10 and 20

const min=10
const max=20
//generic formulaa we get
console.log(Math.floor(Math.random()*(max-min+1))+min)
//min-max we took so that we get a range instead pf 10 
//added 1 coz ye 0 na bne
//us case ko avaoid krne k liye ki min value itni chahiye toh we added a min value at last
