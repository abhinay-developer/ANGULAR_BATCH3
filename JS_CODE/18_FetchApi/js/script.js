console.log("Fetch Api");

let api=fetch("https://jsonplaceholder.typicode.com/users");

 api.then((response)=>{
   console.log(response);
      response.json().then((actualResponse)=>{
         console.log(actualResponse);
          actualResponse.forEach(element => {
           console.log(element.name);
           document.writeln(element.name+"<br>")
          });


      })
 }).catch((error)=>{
   console.log(error)
 })


console.log(api);
