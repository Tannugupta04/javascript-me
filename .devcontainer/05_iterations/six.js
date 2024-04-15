// some points about for each loop

// const coding=["js","ruby","java","python","cpp"]
// coding.forEach((item)=>{
//     //console.log(item);

// })
// //if we want to store it in a variable
// const values=coding.forEach((item )=>{
//     console.log(item);

// })
// console.log(values);
//return me undefiend mila and valeus to print ho gyi
//for each does not return any value


//jruri thodi h hm hmesha array me print hi krvae 
//toh usse bchne k liye  is done in below example

const myNums=[1,2,3,4,5,6,7,8,9,10]
//let say hme vo sare num chahiye jo 4 se bde h

// const newNums=myNums.filter( (num)=>num>4)//ye filetr value return krta h for each nhi krta
// //here we need condition
// console.log(newNums);

//filetr also take call abck inside it


//if we want to write it as
const newNums1=myNums.filter( (num)=>{
    //num>4//num>4 will give empty array[]
    return num>4
    
    
    //IMPT
    //so when we write in paranthesis()  or nhi krte then it is implicit return mtlb khud return ho jata hai but 
    //when we use curly braces{}  (scope)open krte hai  then we have to write return

})

//if i want to do this same by using foreach instead of filter

const newNums=[]
myNums.forEach((num)=>{
    if (num>4){
        newNums.push(num)//push is basic methd tp add value

    }
})
//console.log(newNums);


///examples
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //those books jinka genre history hai
const userBooks=books.filter((bk)=>bk.genre==='History')
console.log(userBooks);

//those boooks which are published after 2000
let userBooks1=books.filter((bk1)=>bk1.publish>2000)
userBooks1=books.filter((bk1)=>bk1.publish>1995&&bk1.genre==="History")

console.log(userBooks1);

//can be
// let  userBooks=books.filter((bk)=>bk.genre==='History')
// 

// //those boooks which are published after 2000
// userBooks1=books.filter((bk1)=>bk1.publish>2000)
// console.log(userBooks1);

