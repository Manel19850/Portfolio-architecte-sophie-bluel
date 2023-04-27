
const loginEmail = document.getElementById("email")
const loginMotDePasse= document.getElementById("motDePasse")
const butonConex = document.getElementById("valider")
console.log(butonConex);


butonConex.addEventListener("click", function (){
if (loginEmail.value.length == 0 || loginMotDePasse.value.length == 0){
    alert('ERROR'); return
}})

if (loginEmail.value === "sophie.bluel@test.tld" && loginMotDePasse.value === "S0phie") {
  console.log(loginEmail.value);
  console.log (loginMotDePasse.value);
  
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
        if (data.success) {
          window.location.replace("index.html");
        }
      })
    } else {
      alert('Identifiants incorrects');
  
    }
  




