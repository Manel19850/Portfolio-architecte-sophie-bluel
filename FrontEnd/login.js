
const loginEmail = document.getElementById("email");
const loginMotDePasse= document.getElementById("motDePasse");
const buttonConex = document.getElementById("valider");
console.log(buttonConex);
buttonConex.addEventListener("click", function (event){
  event.preventDefault();
  if (loginEmail.value.length == 0 || loginMotDePasse.value.length == 0){
      alert('ERROR'); return
    }

fetch ("http://localhost:5678/api/users/login",{
  method:"POST",
  headers: {"Content-Type":"application/json"},
  body:JSON.stringify({   
    email: loginEmail.value,
    password: loginMotDePasse.value
  })


})
      .then(response => response.json())
      .then(data => {
        console.log (data);
        if (data.token) {
        localStorage.setItem("token",data.token)
      
        const dataToken = localStorage.getItem('token')
   console.log(dataToken);
   window.location.href = "index.html";
        }
        

      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
  })

})



