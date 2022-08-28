function displayNames() {
    console.log("Raja ,Kumar");
}
displayNames();
//1. name 
function display(name) {
    console.log("Name:" + name);
}
display("Raja");
// 2. add 
function add(firstValue, secoundValue) {
    var sum = firstValue + secoundValue;
    console.log("Sum:" + sum);
}
add(10, 20);
//anonymous function
var myFunction = function (carBrand, carColor) {
    console.log("Car Brand:" + carBrand + " Car Color:" + carColor);
};
myFunction("BMW", "WHITE");
//arrow function
var myFunc = function (carBrand, carColor) {
    console.log("Car Brand:" + carBrand + " Car Color:" + carColor);
};
myFunc("BMW", "WHITE");
