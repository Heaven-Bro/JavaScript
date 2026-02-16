const name = "Heaven"
const repoCount = 550

console.log(name + repoCount + " " + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String("chess-game")
console.log(gamename[1]);
console.log(gamename.__proto__); // String.prototype

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("s"));

const newString = gamename.substring(0, 3);
console.log(newString);

const anotherString = gamename.slice(-3, 2);
console.log(anotherString);

const newString2 = "    heaven    "
console.log(newString2);
console.log(newString2.trim());  //trim start  & trim end (remove space)

const url = "https://heaven.com/heaven%20chakma"   // %20 = space
console.log(url.replace("%20", "-"));  // replace only first match

console.log(url.includes("heaven"));  // true

console.log(gamename.split("-"));  // split into array based on separator
