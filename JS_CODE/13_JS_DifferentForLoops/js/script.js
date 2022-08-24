console.log("for loops")
/***
 * 
 *  1.traditional
 *  2.for of
 *  3.for in
 *  4.for each
 * 
 */

for (i = 0; i <= 10; i++) {
    console.log(i)
}

let obj = [{
    firstName: "sai",
    lastName: "Kumar",
    email: "saikumar@gmail.com"
}, {
    firstName: "nani",
    lastName: "sai",
    email: "nanisai@gmail.com"
}]


for (const ob of obj) {
    console.log(ob)
}

for (const key in obj) {
  console.log(obj[key]);
}

obj.forEach((element)=>{
    console.log(element)
})