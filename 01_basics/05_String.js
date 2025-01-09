const name = "het"
const repoCount = 15

// console.log(name + " has "+ repoCount);

console.log(`In github Mr. ${name} has ${repoCount} number og repositories`);//modern way of writing the string using backtick

const gameName = new String("Jimmy9")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));
// console.log(gameName.length);

const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(-5,3);
console.log(anotherString);

const newStringOne = "   het   "
console.log(newStringOne.trim());

const url = "https://het%30lakhmani"
console.log(url.replace('%30','-'));

console.log(url.includes('het'));

console.log(gameName.split('m'));
