const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)//this will push the second array into first but they will not merge means it will be array inside arr

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);//this will merge both the arr

const all_new_heros = [...marvel_heros, ...dc_heros]//... is called spread operator it will merge both the arr and it is most prefered way 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 

const real_another_array = another_array.flat(Infinity)//.flat()will merge the elements of diff arr compeletly and (infinity) means all/every 
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))// to check whether or not it is an arr
console.log(Array.from("Hitesh"))//convert it into arr
console.log(Array.from({name: "hitesh"})) // interesting (this will not work becoz we have to mention whether key or value )

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// Returns a new array from a set of elements. A set of elements to include in the new array object.