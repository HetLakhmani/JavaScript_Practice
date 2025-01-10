//Immediately Invoked Function Expression(IIFE)

//to avoid pollution from the global scope we use iffe

//normal way to write a function 
function mouse(){
    console.log(`mouse connected`);
    
}
mouse();// semicolon is neccessary to execute next func

//iife
(function key(){
    console.log(`key connected`);
    
})();

((name)=> {
    console.log(`${name} welcome to the life`)
})('het')