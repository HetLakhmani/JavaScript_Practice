// var c = 300
// const b = 200
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c =30 //this will change the var from the global scope so avoid using var 
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//Closure
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);//this will work becoz a child can access parent variable
    }
    // console.log(website);//outside the block scope so will give error

     two()////outside the block scope so will give error


}

// one()////outside the block scope so will give error


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);//will work becoz it can access the parent scope variable
    }
    // console.log(website);//not work becoz outside
}

// console.log(username);//not work becoz outside


// ++++++++++++++++++ interesting ++++++++++++++++++

//hoiting
console.log(addone(5))//Here the declaration/callback func is before the main body but it will work becoz it is not stored in any variable

function addone(num){
    return num + 1
}



addTwo(5)//this will give an error becoz the func is stored in some varible 
const addTwo = function(num){
    return num + 2
}