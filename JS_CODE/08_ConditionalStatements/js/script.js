console.log("Conditional Statements");


/***
 *   1.conditional Operators
 *   2.logical Operators
 *   3.assignment Operators
 *   4.ternary Operators 
 */


/***
 *  if ==>done
 *  if else==>done
 *  if else if else
 *  nested if
 *  ladder if
 */


/**
 *   1.If age is Greater 18 your are Eligible
 *   2.If age is 21 eligble for marriage Otherwise not eligible for marriage
 * 
 */


function eligibilty(age) {
  //  console.log("Eligibilty Method called");
  if (age > 18) {
    //  console.log("You are Eligible");
  }
}

eligibilty(18);




function marriageEligibility(age) {
  if (age >= 21) {
    // console.log("Your Are Eligible for Marriage");
  } else {
    // console.log("You are Not Eligible")
  }

}
marriageEligibility(90);



//if else if else 


function studentGrade(marks) {
  if (marks >= 35 && marks <= 49) {
    console.log("Third Class")
  }
  else if (marks >= 50 && marks < 59) {
    console.log("secound Class");
  } else if (marks >= 60 && marks <= 74) {
    console.log("first class")
  } else if (marks >= 75 && marks <= 100) {
    console.log("Distinction")
  } else {
    console.log("Fail Or Invalid marks");
  }
}


//studentGrade(prompt("Enter the marks"));


//ladder if

var  amount=1000;
  if(amount==1000){
    console.log("Amounts are Equal");
  }  
  if(amount>1000){
    console.log("Amounts Greater than 1000");
  }  
  if(amount<1000){
    console.log("Amounts Less than 1000");
  }


   //Nested If

   function nestedIfExample(age){
     if(age>25){
      if(age>36){
        if(age>90){
          if(age>100){
            console.log("You are the Rockstar")
          }
        }
      }
     }

   }

   nestedIfExample(1000);

















/**
 *  Conditional Operators   (if  ,else ,if else if else ,ladder if ,nested if statements)
 *     >
 *     <
 *     >>
 *     <<
 * 
 */

/**
 *  Logical Opertors
 *    &&
 *    ||
 *    !
 */

/**   assignment operators
 *   ==
 *   >=
 *   <=
 *   !=
 *   ===
 */

/****
 *  ternary Opertor
 *      (condition)?"statement1":"statement"
 */