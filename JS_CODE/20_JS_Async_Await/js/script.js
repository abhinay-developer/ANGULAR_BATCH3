console.log("Async Wait")


async function   getAllUsers(){
    const users=await fetch("https://jsonplaceholder.typicode.com/users");
    let actualUsers= await users.json();
    console.log(actualUsers);  
    actualUsers.forEach(element => {
        let tableData="";
        actualUsers=actualUsers.map((data)=>{
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
}

getAllUsers();