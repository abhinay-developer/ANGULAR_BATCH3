console.log("Switch");

/***
 *  if 
 *  if else
 *  if else if else
 *  nested if 
 *  ladder if
 * 
 */

let age = 30;
function displaySwitchCase() {
  switch (age) {
    case 10:
      console.log("age is 10")
      break;
    case 20:
      console.log("age is 20");
      break;
    default:
      console.log("No Age");
  }
}

//displaySwitchCase();


function add(firstValue, secoundValue) {
  let sum = Number(firstValue) + Number(secoundValue);
  console.log(sum);
}

function sub(firstValue, secoundValue) {
  let sub = Number(firstValue) - Number(secoundValue);
  console.log(sub);
}

function mul(firstValue, secoundValue) {
  let mul = Number(firstValue) * Number(secoundValue);
  console.log(mul);
}


switch (prompt("Enter the operation")) {
  case "add":
    add(10, 20);
    break;
  case "sub":
    sub(10, 20);
    break;
  case "mul":
    mul(10, 20);
    break
  default:
    console.log("Invalid Operation")
}