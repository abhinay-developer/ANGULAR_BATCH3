/***
 * Classes & Objects
 */

 class   Employee{
    id:number;
    firstName:string;
    lastName:string;
    email:string;

    displayEmployee(){
         console.log(`Id:${this.id}`);
         console.log(`First Name:${this.firstName}`);
         console.log(`Last Name:${this.lastName}`);
         console.log(`Email:${this.email}`);
    }
 }

 let emp=new Employee(); //Creating the Object class
 let emp1=new Employee();
 emp.id=1;
 emp.firstName="sai";
 emp.lastName="raja";
 emp.email="raja@gmail.com";
 emp1.id=1;
 emp1.firstName="nani";
 emp1.lastName="sai";
 emp1.email="nanisai@gmail.com";
 console.log(emp1);
 console.log(emp);




  
