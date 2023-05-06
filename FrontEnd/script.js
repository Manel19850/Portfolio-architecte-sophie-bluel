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

        const BoutonAll = document.querySelector("#All");
        console.log(BoutonAll);
        BoutonAll.addEventListener("click", () => {
            const projetFiltre = product.filter(() => {
                return product;
            });
            sectionGallery = document.querySelector(".gallery");
            sectionGallery.innerHTML=""
            AfficherProjet(projetFiltre);
            console.log(projetFiltre);

        })

        const BoutonObjet = document.querySelector("#Objets");
        console.log(BoutonObjet);
        BoutonObjet.addEventListener("click", () => {
            const projetFiltre = product.filter((oneproduct) => {
                return oneproduct.categoryId === 1;
            });
            sectionGallery = document.querySelector(".gallery");
            sectionGallery.innerHTML=""
            AfficherProjet(projetFiltre);
            console.log(projetFiltre);
        })

        const BoutonAppartements = document.querySelector("#Appartements");
        console.log(BoutonAppartements);
        BoutonAppartements.addEventListener("click", () => {
            const projetFiltre = product.filter((oneproduct) => {
                return oneproduct.categoryId === 2;
            });
            sectionGallery = document.querySelector(".gallery");
            sectionGallery.innerHTML=""
            AfficherProjet(projetFiltre);
            console.log(projetFiltre);

        })

        const BoutonHotelEtRestau = document.querySelector("#HotelEtRestau");
        console.log(BoutonHotelEtRestau);
        BoutonHotelEtRestau.addEventListener("click", () => {
            const projetFiltre = product.filter((oneproduct) => {
                return oneproduct.categoryId === 3
            });
            sectionGallery = document.querySelector(".gallery");
            sectionGallery.innerHTML=""
            AfficherProjet(projetFiltre);
            console.log(projetFiltre);
        
          })

         
      })

     


   const bouttonsSupprimer = document.querySelectorAll(".bouttonSup");
   bouttonsSupprimer.forEach((bouttonSupprimer) => {
     bouttonSupprimer.addEventListener("click", () => {
       const imgId = bouttonSupprimer. getAttribute("data-id");
       supprimerImage(imgId);
     });
   });
   const dataToken = localStorage.getItem('token')
   console.log(dataToken);

   function supprimerImage(imgId)
   {
     fetch(`http://localhost:5678/api/works/${imgId}`, {
       method: "delete",
       headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${dataToken}`
       }
     
     })
     .then(response => response.json())
     .then((data) => {
       console.log(data);
       localStorage.setItem('token', data.token);

     });
   }
 

  
     
/* Fenêtre modale 1 et 2*/
        /* création des différents bouttons*/
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
    
        /*affiche ma modal 1 et mon overlay*/
        function afficherModal() {
        fenetreModal.classList.add("active");
        overlayModal.classList.add("active");}

        /*ferme ma modal en cliquant sur la croix*/
        function fermerModal () {
        fenetreModal.classList.remove("active");
        overlayModal.classList.remove("active");}

        /*affiche ma modalBis*/
        function afficherModalBis() {
        fenetreModalBis.classList.add("active"); 
        }
       
        /*fermer ma modalBis -  ma modal et mon overlay en cliquant sur la croix*/
        function fermerModalBis() {
        fenetreModalBis.classList.remove("active")
        fenetreModal.classList.remove ("active");
        overlayModal.classList.remove("active");
       } 


  

            
          






      
 
        
   
   

