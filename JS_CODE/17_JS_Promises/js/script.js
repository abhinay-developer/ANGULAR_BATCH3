console.log("Promises")

//Promise is an object we have three states  (pending,fulfilled,rejected);


let promise=new Promise((resolve,rejected)=>{
   let age=10

     if(age<10){
        resolve("Promise is Executed Successfully");
     }
     else{
        rejected("Promise is rejected successfully");
     }
})
promise.then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error);
})

console.log(promise);