const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);//[ 'superman', 'flash', 'batman' ]
//output:[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] array inside array
//that we do not want
//array can take any dato also can take array also

//=>another method to add that is concatenate
const allHeros=marvel_heros.concat(dc_heros)//output [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(allHeros);


//=>spread operator to spread the things(example drop the glass)

const all_new_herps=[...marvel_heros,...dc_heros]
//output [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//dot dot dot se spread ho jaega ek ek value milegi


//race case  situation//sbko ek hi array me dedo
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
//infinity means kitne bhi array inside one array
console.log(real_another_array);//[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

//anotyher method used in data scrapping
//when data come in different format
console.log(Array.isArray("tannu"));
console.log(Array.from("tannu"));//[ 't', 'a', 'n', 'n', 'u' ]]
//hr value ko array me convert kr dega we can give objects ,string etc

console.log(Array.from({name:"tannu"}));//gives an empty array as it cannot convert it directly into an array
//we will have to specify whether to make an array of keys pr values


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]