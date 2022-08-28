/**
 *   spread  & rest 
 * 
 */


/**
 * rest
 */

let ages:number[]=[10,20,90,89,100];
let colors:string[]=["RED","GREEN","ORANGE"];

let newArray=[...ages,...colors];
console.log(newArray);

/**
 * spread
 */

function  displayGadgets(name:string,...gadgets){
 console.log("Name:"+name);
 console.log("Gadgets:"+gadgets);
} 

displayGadgets("Sai","watch","band","earphones","speakers");
