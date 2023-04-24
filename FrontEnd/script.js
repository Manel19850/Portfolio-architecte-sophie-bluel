fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((product) => {
        console.log(product);

        function AfficherProjet(product) {
            
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