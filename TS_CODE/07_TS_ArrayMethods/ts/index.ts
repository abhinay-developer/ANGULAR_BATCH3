/***
 *   
 * Array Methods
 * 
 * push
 * pop
 * unshift
 * shift
 * map 
 * filter
 */

let cars=["BMW","AUDI","BENZ","ROLLS ROYCE","TOYOTO"];

//   cars.forEach((element:any)=>{
//     console.log(element);

//   })

  let myCars=cars.splice(0,3);//Prints Index values
  console.log(myCars);


  let myCars1=cars.slice(0,3);//deletes the Index splice
  console.log(myCars1);