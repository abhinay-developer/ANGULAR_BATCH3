console.log("External JS")

let numbers = [10, 20, 30, 89, 100, 900, 90];


for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 100) {
    //console.log(element);
  }
}


/***
 *     push()   Method   is push elements from the last in an array
 */

numbers.push(230);

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  // console.log(element);//let numbers = [10, 20, 30, 89, 100, 900, 90,230];
}

/**
 *  unshift()   Method   is push elements from the first in an array
 * 
 */

numbers.unshift(240);
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  //  console.log(element);//let numbers = [240,10, 20, 30, 89, 100, 900, 90,230];
}

/**
 *  shift()   Method   remove element from the first
 * 
 */

numbers.shift(240);
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  //console.log(element);//let numbers = [10, 20, 30, 89, 100, 900, 90,230];
}

/**
*  pop()   Method   remove element from the last
* 
*/

numbers.pop();
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  //console.log(element);//let numbers = [10, 20, 30, 89, 100, 900, 90];
}

/***
 * 
 * 
 * 
 */
 let obj = [{
  firstName: "sai",
  lastName: "Kumar",
  email: "saikumar@gmail.com",
  age:40
}, ,
{
  firstName: "nani",
  lastName: "sai",
  email: "nanisai@gmail.com",
  age:20
},{
  firstName: "virat",
  lastName: "sai",
  email: "virat@gmail.com",
  age:35
},{
  firstName: "gayle",
  lastName: "chris",
  email: "gayale@gmail.com",
  age:45
},
{
  firstName: "abd",
  lastName: "sa",
  email: "abd@gmail.com",
  age:43
}]

  // obj.forEach((element)=>{
  //   console.log(element);
  // })

  //filter is used to filter the data

   let myObj= obj.filter((element)=>element.age>25);
   console.log(myObj);

   //map   transform the data
  
   let captalizeEmailsObj=obj.map((element=>element.email.toUpperCase()));
   console.log(captalizeEmailsObj);

  


