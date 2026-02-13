let score = "100acb"

console.log(typeof score); 
console.log(typeof (score));  

let valueInnumber = Number(score)
console.log(typeof valueInnumber);
console.log(valueInnumber); 


//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//undefined => NaN

let isloggedIn = 1;

let booleanIsloggedIn = Boolean(isloggedIn)
console.log(booleanIsloggedIn);


// 1 => true; false => 0
// "" => false; " " => true
// "hevean" => true
// null => false
// undefined => false
// 0 => false; 1 => true; -1 => true; 0.0001 => true
// NaN => false
// [] => true; {} => true
// "0" => true; "false" => true; "null" => true; "undefined" => true
// 0, "", null, undefined, NaN => false
// All other values => true
// 0, "", null, undefined, NaN => false
// All other values => true



let someValue = 33
let stringValue = String(someValue)
console.log(stringValue);
console.log(typeof stringValue);