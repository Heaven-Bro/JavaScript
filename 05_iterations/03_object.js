const  myobject = {
    js : 'javascript',
    py : 'python',
    java : 'java'
}

for (const key in myobject) {
    // console.log(`${key} shortcut is for ${myobject[key]}`);
}


const programming = ["js", "py", "java"];

for (const key in programming) {
    console.log(programming[key]);

}


//in map we cannot use for in loop, we have to use for of loop

const map = new Map();
map.set('In', 'India');
map.set('Us', 'United States');
map.set('Uk', 'United Kingdom');

for (const key in map) {
    console.log(key);
    
}