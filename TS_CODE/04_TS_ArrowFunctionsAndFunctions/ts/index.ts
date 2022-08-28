
function  displayNames(){
    console.log("Raja ,Kumar")
}
displayNames();

//1. name 

function display(name:string){
   console.log(`Name:${name}`);
}
display("Raja");

// 2. add 

function add(firstValue:number,secoundValue:number){
const sum=firstValue+secoundValue;
console.log(`Sum:${sum}`);
}
add(10,20);



//anonymous function

let myFunction=function(carBrand:string,carColor:string){
  console.log(`Car Brand:${carBrand} Car Color:${carColor}`);
}
myFunction("BMW","WHITE");



//arrow function
let myFunc=(carBrand:string,carColor:string)=>{
    console.log(`Car Brand:${carBrand} Car Color:${carColor}`);
}
myFunc("BMW","WHITE");
