const coding = ['JavaScript', 'Python', 'Ruby', 'Go', 'C++'];

//defination of callback function is have no name and is used as an argument to another function. It is executed after the completion of the function it is passed to.

coding.forEach (function (language) {
    // console.log(language);
});


coding.forEach ((language) => {
    // console.log(language);
});


function printMe (language) {
    // console.log(language);
}

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

const mycoding = [{
    language : 'JavaScript',
    languageFileName : 'js'
},
{
    language : 'Python',
    languageFileName : 'py'
},
{
    language : 'Ruby',
    languageFileName : 'rb'
},
]

mycoding.forEach((item) => {
    console.log(`Language: ${item.language}, File Extension: ${item.languageFileName}`);
});