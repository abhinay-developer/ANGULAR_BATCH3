console.log("Spread And Rest Operators");

//Rest Operators   is applicable of arrays


function   displayeEmployees(...employees){
    console.log(employees);
} 
displayeEmployees("kumar","sai","raju","naveen","navya","ajay","srikanth","abhinay","naresh","kavitha")

let employeesDetails=[
    {
        id:1,
        name:"sai"
    },
    {
        id:2,
        name:"kumar"
    }
]

let companyDetails=[
    {
        id:1,
        companyName:"Infosys"
    },
    {

        id:2,
        companyName:"TCS"
    }
]
let arrayObjects=[...employeesDetails,...companyDetails]
console.log(arrayObjects)


//Spread Parameters

function  displaySpread(name,...arguments){
     console.log(name);
     console.log(arguments);
}
displaySpread("abhi",10,20,20,"sai",true);
