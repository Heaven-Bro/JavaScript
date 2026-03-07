// for of

// [ " ", " ", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr){
    // console.log(num);
}

const greeting = ' Hello';
for (const greet of greeting){
    // console.log(`Each char is ${greet}`);
}


//maps

const map = new Map();
map.set('In', 'India');
map.set('Us', 'United States');
map.set('Uk', 'United Kingdom');

console.log(map);

for (const [key, value] of map){
    // console.log(`Country: ${key}, Capital: ${value}`);
}

const myobject = {
    'game1' : 'mlbb',
    'game2' : 'pubg',
    'game3' : 'coc'
}
for (const [key, value]  in myobject){
    console.log(key + ' ' + value);
}

for (const [key, value] of Object.entries(myobject)){
    // console.log(`Game: ${key}, Name: ${value}`);
}