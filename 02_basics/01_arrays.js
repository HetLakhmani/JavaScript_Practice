//array

const myArr = [0,1,2,3,4];
const myHeros= ['Batman' , 'ironman'];


const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[3]);

myArr.push(5);//push push at the end of the array
myArr.pop();//remove the last element of the array 


myArr.unshift(9); // will add the element at the beginning of the array
myArr.shift();// will remove the element from the beginning of the array

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


const newArr = myHeros.join();//this will convert the array into string and join the elements as one
console.log(newArr.length);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//this will give the mentioned range value excluding till index 3 excluding 3 , but the original array will remain same 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)//this will give the mentioned range value excluding till index 3 including 3 , but the original array will be changed it will no more contain the element that are mentioned int the range  

console.log("C ", myArr);
console.log(myn2);
