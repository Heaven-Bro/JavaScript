const marvelHeroes = ["Spiderman", "Ironman", "Thor", "Hulk", "Black Widow"]
const dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes) //not a good way to merge two arrays

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes) //return a new array by merging two arrays

const allHeroes = [...marvelHeroes, ...dcHeroes] //spread operator to merge two arrays
console.log(allHeroes) //return a new array by merging two arrays


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //flatten the array to any level
console.log(real_another_array)



console.log(Array.isArray("Heaven"))
console.log(Array.from("Heaven")) //convert string to array
console.log(Array.from({name: "Heaven"})) //convert object to array




let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //create an array from individual values
