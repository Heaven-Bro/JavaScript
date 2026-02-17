//array

// () = parenthesis
// [] = square brackets
// {} = curly braces

const myArr = [0, 1, 2, 3, 4, 5]
const myHeores = ["Superman", "Batman", "Wonder Woman"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(typeof myArr);
console.log(myArr[1]);

//Array methods

myArr.push(6)  // add element to the end of the array
console.log(myArr);
myArr.pop()  // remove the last element of the array
console.log(myArr);
myArr.unshift(-1)  // add element to the beginning of the array
console.log(myArr);
myArr.shift()  // remove the first element of the array
console.log(myArr);

console.log(myArr.includes(9));  // check if the array includes a specific element
console.log(myArr.indexOf(1));  // find the index of a specific element


const newArr = myArr.join()  // join the elements of the array into a string with a specified separator
console.log(typeof newArr);
console.log(newArr);


//slice, splice

console.log("A", myArr)
const myn1 = myArr.slice(1, 3)  // create a new array by slicing a portion of the original array
console.log(myn1)
console.log("B", myArr)


const myn2 = myArr.splice(1, 3)  // remove elements from the original array and return them as a new array
console.log(myn2)
console.log("C", myArr)   //manupulates the original array
