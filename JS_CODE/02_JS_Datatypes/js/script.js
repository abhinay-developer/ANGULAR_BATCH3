console.log("JS Datatypes")

/***
 *  1.String
 *  2.Number
 *  3.boolean
 *  4.Object
 *  5.array
 * 
 */

//String
var firstName="Kumar";
var lastName="sai";
var companyName='TCS';
console.log("First Name:"+firstName);//First Name:kumar
console.log("Last Name:"+lastName)
console.log("Company Name:"+companyName);
console.log(typeof(firstName)) //To find out the datatype

//Number 
var mobileNumber=90909099090;
var age=25;
var aadharNo=123456789012;
var price=1500.0;

console.log("Mobile Number:"+mobileNumber);
console.log("Age:"+age);
console.log("Aadhar No:"+aadharNo);
console.log("Price:"+price)
console.log(typeof(mobileNumber))


//changing the Values
  var myName="raj";
 console.log(myName);
  myName="rajKumar";
  console.log(myName)


  //changing the datatypes

  var example="20";
  console.log(example);// 20
  console.log(typeof(example));//string
  example=20;
  console.log(example);//20
  console.log(typeof(example))//number

  //boolean true or false 
 
   var isQualified=true;
   var isMarried=false;

   console.log("Qualified:"+isQualified);
   console.log("Married:"+isMarried);

   //Object

   var obj= {
    firstName:"sai",
    lastName:"kumar",
    email:"saikumar@gmail.com",
    age:25
  }

   console.log(obj);
   console.log(obj.firstName);
   console.log(obj.age);
   console.log(typeof(obj))


   //Array 
   var companies=["TCS","INFO","CTS","DELIOTE"];
   console.log(companies);

   var prices=[10,899,100,8777,80808];
   console.log(prices)
   console.log(typeof(prices))