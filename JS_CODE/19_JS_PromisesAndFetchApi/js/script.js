console.log("Promises in Javascript")


  function getAllUsers(){
    const users=fetch("https://jsonplaceholder.typicode.com/users");   
    users.then((data)=>{
        data.json().then((response)=>{
            console.log(response);
            response.forEach(element => {
              let tableData="";
              response=response.map((data)=>{
                 tableData+=`<tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.username}</td>
                    <td>${data.email}</td>
                    <td>${data.phone}</td>
                 </tr>`
                  })
                  document.getElementById('tbody').innerHTML=tableData;
            });   
        }).catch((error)=>{
            console.log(error);
        })
    })
  }
  getAllUsers();

