//while loop

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

// while loop use array
let array = [ 'flash', 'superman', 'spiderman' ]

let arr = 0
while (arr < array.length) {
    // const element = array[arr];
    // console.log(element);
    console.log(`Value is ${array[arr]}`);
    arr++;
}



// do while looop

let score = 1
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);