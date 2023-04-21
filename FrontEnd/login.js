const container = document.getElementById ("container")
const loginEmail = document.getElementById ("email")
const loginMotDePasse= document.getElementById ("motDePasse")
const butonConex = document.getElementById ("valider")

butonConex.addEventListener ("click", function (){
if (loginEmail.value-length <1 || loginMotDePasse.value-length<1){
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
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    window.location.replace("file:///C:/Users/manel.jouini.ONCEFORALL/OneDrive%20-%20ALG/Bureau/Projet_Sophie_Bluel/Portfolio-architecte-sophie-bluel/FrontEnd/index.html");
  }
})




