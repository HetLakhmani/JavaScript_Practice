//number conversion
let score = "34abd"

// console.log(typeof score);
// console.log(typeof(score));

let valueNumber = Number(score);
// console.log(valueNumber);

//"33" => 33
//'33adb' => NaN (not a number)
//true=>1; false=>0 

//boolean conversion
let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//1 or "string"=> true, 
//0 or ""=> false

// *****Operations*******

let value =3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%2);

let str1 = 'hello'
let str2 = 'het'

let str3 = str1 + str2
// console.log(str3);

// console.log(1+2);
// console.log(1+'2');
// console.log('1'+2);
// console.log('1' + 2 + 1);
// console.log(1 + 2 + '1'); //pehle ka hoga 

 let x=3
 let y = x++

 console.log('x:'+ (x), 'y:'+ (y) );//x:4 , y:3 becoz it will print then increment 

 let a=3
 let b = ++a

 console.log('a:'+ (a), 'b:'+ (b) );//a:4 , b:4 print and increment