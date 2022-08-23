console.log("Let Const var");
console.log(amount);//undefined
/***
 * 
 *  var is a Keyword in Javascript , Global Key word we can access variable from any where
 *  let is a scope level variable   we can access with in the scope 
 *  const is a scope level variable we can access with in the scope and also value cannot be changed
 */

var amount = 0;
var myName = "sai";

function amountChanges() {
  if (myName == "sai") {
    amount = 1000;
    console.log(amount);
  }
}
amountChanges();


//  let age=10;
//  age=20;                        scope level we can reasign the values
//  console.log(age)


const PI = 3.14;
console.log(PI); //3.14
//PI=90;//ERROR  script.js:29 Uncaught TypeError: Assignment to constant variable.
console.log(PI);


a = 10;  // 100% Global

console.log(a)