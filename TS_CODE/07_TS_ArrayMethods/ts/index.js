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
var cars = ["BMW", "AUDI", "BENZ", "ROLLS ROYCE", "TOYOTO"];
//   cars.forEach((element:any)=>{
//     console.log(element);
//   })
var myCars = cars.splice(0, 3);
console.log(myCars);
var myCars1 = cars.slice(0, 3);
console.log(myCars1);
