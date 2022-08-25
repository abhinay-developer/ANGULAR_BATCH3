console.log("JS Arrow functions");

 //traditionl
function add(x,y){
    const sum=x+y;
    console.log(sum);
}
add(1,2);

// => Es6 arrow functions
let addUsingArrow=(a,b)=>{
      const  sum=a+b;
      console.log(sum);
}
addUsingArrow(10,20);

let  displayNames=function(name,age){
  console.log(name);
  console.log(age)
}
displayNames("abhi",25);


/**
 *  arrow functions
 * 
 */
 let employees=[
     {
        id:1,
        username:"sai",
        role:"Java Developer",
        exp:2,
        companyName:"Infosys",
        salary:35000
     },
     {
        id:2,
        username:"viral",
        role:"Angular Developer",
        exp:5,
        companyName:"CDK Global",
        salary:85000
     },
     {
        id:3,
        username:"raj",
        role:"Angular Developer",
        exp:2,
        companyName:"TCS",
        salary:55000
     },
     {
        id:4,
        username:"Kumar",
        role:"React Developer",
        exp:3,
        companyName:"TCS",
        salary:75000
     }
 ] 

//  employees.forEach((employee)=>{
//     console.log(employee);
//  })

//filter method 

  let filteredEmployees=employees.filter((employee)=>employee.salary>35000);
  //console.log(filteredEmployees);


  //   setTimout()     setInterval() 

//Set Timeout   is exceuted based on certain time 


  function  hello(){
 //   console.log("hello");
  }   
let counter=0;
let text="set Interval";
 function display(){
   //console.log(text+Number(counter+1))
 } 

 // Repetedaly excutes the statements based on time duration
 setInterval(()=>{
   display();
 },5000)



  setTimeout(()=>{
    
    hello();
  },5000)  




  //let  displayName=()=>console.log("Raju");

//   let displayName=(username)=>console.log(username);
//   displayName("Raju");


// let displayName=username=>console.log(username); //Only One Paramter
 
//  displayName(username);

let disNames=(username,email)=>console.log(`Username:${username}Email:${email}`);
disNames("sai","sai@1234");

let displayEmployee=(employee)=>(console.log(employee));

displayEmployee({
     id:1,
     name:"sai",
     age:25
})

let displayAges=(ages)=>console.log(ages);
displayAges([10,20,40,90,67]);
