const coding = ['JavaScript', 'Python', 'Ruby', 'Go', 'C++'];

const values = coding.forEach((language) => {
    console.log(language);
    return language;
});

//for each loop does not return anything, it is used to perform an action on each element of the array. It does not create a new array like map, filter, reduce etc.
// console.log(values);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.filter((num) => num > 4);
// console.log(newNumbers);

const newNum = [];
myNumbers.forEach((num) => {
    if (num > 4) {
        newNum.push(num);
    }
});

// console.log(newNum);

const books = [
    { title : 'The Great Gatsby', genre : 'Fiction', author : 'F. Scott Fitzgerald', published : 1925 },
    { title : 'To Kill a Mockingbird', genre : 'Fiction', author : 'Harper Lee', published : 1960 },
    { title : '1984', genre : 'Dystopian', author : 'George Orwell', published : 1949 },
    { title : 'Pride and Prejudice', genre : 'Romance', author : 'Jane Austen', published : 1813 },
    { title : 'The Catcher in the Rye', genre : 'Fiction', author : 'J.D. Salinger', published : 1951 }
];

let userBooks =  books.filter((bk) => bk.genre === 'Fiction');

userBooks = books.filter((bk) => {return bk.published >= 1950});
console.log(userBooks);


