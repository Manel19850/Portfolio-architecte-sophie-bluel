
/* Affichage Dynamique des projets */
const dataToken = localStorage.getItem('token')
console.log(dataToken);
if (dataToken) {
  const loginBar = document.querySelector('.loginBar');
  loginBar.classList.add('active');
  //const loginButton= document.querySelector("#login");
  //loginButton.innerHTML= '<a href="login.html">Logout</a>'
}
else {
  const loginBar = document.querySelector('.loginBar');
  loginBar.classList.remove('active');
 // const loginButton= document.querySelector("#login");
  //loginButton.innerHTML= '<a href="login.html">Login</a>'
}

fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((product) => {
        console.log(product);

        function AfficherProjet(product){
          for (let i = 0; i < product.length; i++)

            {
                const article = product[i];
                const imageUrl = article.imageUrl;
                const title = article.title;
                

                const card = document.createElement("div");
                const imageUrlElement = document.createElement("img");
                imageUrlElement.src = imageUrl;
                const titleElement = document.createElement("p");
                titleElement.innerText = title;
                
            
                sectionGallery = document.querySelector(".gallery")
                card.appendChild(imageUrlElement);
                card.appendChild(titleElement);
                sectionGallery.appendChild(card);
            }
          }

        AfficherProjet(product);


            BoutonAll= document.createElement ("button");
            BoutonAll.innerText= "Tous"
            BoutonAll.classList.add("filtre-button");

            BoutonObjet= document.createElement ("button");
            BoutonObjet.innerText="Objets"
            BoutonObjet.classList.add("filtre-button");

            BoutonAppartements= document.createElement ("button");
            BoutonAppartements.innerText="Appartements"
            BoutonAppartements.classList.add("filtre-button");

            BoutonHotelEtRestau= document.createElement ("button");
            BoutonHotelEtRestau.innerText="Hôtels et Restaurants"
            BoutonHotelEtRestau.classList.add("filtre-button");

    
          let sectionFiltres = document.querySelector('.filtres');
          if (!sectionFiltres) {
            sectionFiltres = document.createElement('div');
            sectionFiltres.classList.add('filtres');
          }
          
              sectionFiltres.appendChild(BoutonAll);
              sectionFiltres.appendChild(BoutonObjet);
              sectionFiltres.appendChild(BoutonAppartements);
              sectionFiltres.appendChild(BoutonHotelEtRestau);


        BoutonAll.addEventListener("click", () => {
            const projetFiltre = product.filter(() => {
                return product;
            });
            sectionGallery = document.querySelector(".gallery");
            sectionGallery.innerHTML=""
            AfficherProjet(projetFiltre);
            console.log(projetFiltre);

        })

       
        BoutonObjet.addEventListener("click", () => {
            const projetFiltre = product.filter((oneproduct) => {
                return oneproduct.categoryId === 1;
            });
            sectionGallery = document.querySelector(".gallery");
            sectionGallery.innerHTML=""
            AfficherProjet(projetFiltre);
            console.log(projetFiltre);
        })

        
        BoutonAppartements.addEventListener("click", () => {
            const projetFiltre = product.filter((oneproduct) => {
                return oneproduct.categoryId === 2;
            });
            sectionGallery = document.querySelector(".gallery");
            sectionGallery.innerHTML=""
            AfficherProjet(projetFiltre);
            console.log(projetFiltre);

        })

       
        BoutonHotelEtRestau.addEventListener("click", () => {
            const projetFiltre = product.filter((oneproduct) => {
                return oneproduct.categoryId === 3
            });
            sectionGallery = document.querySelector(".gallery");
            sectionGallery.innerHTML=""
            AfficherProjet(projetFiltre);
            console.log(projetFiltre);
        
          })

          document.querySelector ("form").addEventListener ("submit", function (event){
            event.preventDefault();
          });
          
        })
     
/* Affichache dynamique des projets dans la fenêtre modale*/

fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then(data => {

      let imageModalContainer= document.querySelector(".modal-body");
        

      for (let i = 0; i < data.length; i++) {
        let imageUrl = data[i].imageUrl;
       
let imageModale = document.createElement("img");
imageModale.src = imageUrl;
imageModale.classList.add("imageModale");

let supprimer = document.createElement("button");
supprimer.classList.add ("button");

let iconesupprimer = document.createElement("i");
iconesupprimer.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

let texteEdite = document.createElement("p");
texteEdite.innerText = "édité";

supprimer.appendChild(iconesupprimer);

let imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");
imageContainer.appendChild(imageModale);
imageContainer.appendChild(supprimer);

let sectionImageModaleContainer = document.createElement("div");
sectionImageModaleContainer.appendChild(imageContainer);
sectionImageModaleContainer.appendChild(texteEdite);
imageModalContainer.appendChild(sectionImageModaleContainer);

     }
    
    })

        /* création des  fentres modales et de leurs actions*/

        const bouttonModifier = document.querySelector(".btn-modal");
        const fenetreModal = document.querySelector(".modal");
        const bouttonClose = document.querySelector(".close");
        const overlayModal= document.querySelector(".overlay-modal") ;
        const boutonAjouter = document.querySelector(".ajout-img");
        const fenetreModalBis = document.querySelector(".modal-bis");
        const boutonFermerModalBis = document.querySelector(".close-bis");

           /* Action des différents bouttons*/
           bouttonModifier.addEventListener("click", afficherModal);
           bouttonClose.addEventListener("click", fermerModal);
           boutonAjouter.addEventListener("click", afficherModalBis);
           boutonFermerModalBis.addEventListener("click", fermerModalBis);
           overlayModal.addEventListener("click", fermetureViaOverlay);
   
        /*affiche ma modal 1 et mon overlay*/

        function afficherModal(){
        fenetreModal.classList.add("active");
        overlayModal.classList.add("active");}
        
        /*ferme ma modal en cliquant sur la croix*/
        function fermerModal () {
        fenetreModal.classList.remove("active");
        overlayModal.classList.remove("active");}

        /*affiche ma modalBis*/
        function afficherModalBis() {
        fenetreModalBis.classList.add("active"); }
       
        /*fermer ma modalBis -  ma modal et mon overlay en cliquant sur la croix*/
        function fermerModalBis() {
        fenetreModalBis.classList.remove("active")
        fenetreModal.classList.remove ("active");
        overlayModal.classList.remove("active")} 

       function fermetureViaOverlay() {
        fenetreModalBis.classList.remove("active");
        fenetreModal.classList.remove("active");
        overlayModal.classList.remove("active");}

        /*Ajouter l'action de suppression pour chaque projet*/
        
       
  let supprimer = document.createElement("button");
  supprimer.classList.add ("button");

  fetch("http://localhost:5678/api/works")
  .then((reponse) => reponse.json())
  .then(data => {

    for (let i = 0; i < data.length; i++) {
      let id = data[i].id;
      console.log (id);

  supprimer.addEventListener("click", function (event){
  event.preventDefault();

    fetch("http://localhost:5678/api/works/" + data[i].id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${dataToken}`
      }
    })
      .then((reponse) => {
  
        if (reponse.ok) {
          /*Supprimer l'élément imageContainer*/
          imageModalContainer.removeChild(sectionImageModaleContainer);
        } else {
          // Gérer les erreurs de suppression
          console.log("Error");
        }
      })
      .catch((error) => {
        // Gérer les erreurs de connexion
        console.log("Une erreur API.");
      });
  
    })
  }})
/* création de la deuxième fenetre modale et ajout d'un projet*/

let inputFile = document.getElementById ("photo");
console.log (inputFile);
 const preview = document.getElementById("preview");
const validerPhoto= document.getElementsByClassName ("valider-img")[0];

inputFile.onchange = function(){
const photo = inputFile.files[0];

const objectURL = URL.createObjectURL(photo);
preview.src = objectURL;
preview.style.display = "block";

}
validerPhoto.addEventListener("click", function() {
  preview.style.display = "none";

  const formData = new FormData();
  formData.append("photo", inputFile.files[0]);

  
  fetch("http://localhost:5678/api/works", {
    method: "POST",
    header: {"Authorization": `Bearer ${dataToken}`},
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});

   
