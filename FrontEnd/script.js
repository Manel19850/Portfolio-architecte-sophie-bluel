
    fetch("http://localhost:5678/api/works")
    .then ((reponse) => reponse.json())
    .then ((product) => {

    for (let i = 0; i < product.length; i++)

{  
    const article = product[i];
    const imageUrl= article.imageUrl;
    const title = article.title;
    console.log (product);

    const card = document.createElement ("div")

    const imageUrlElement = document.createElement("img");
    imageUrlElement.src = imageUrl;
    
    const titleElement = document.createElement("p");
    titleElement.innerText= title ;
    
    sectionGallery = document.querySelector (".gallery")
    card.appendChild(imageUrlElement);
    card.appendChild(titleElement);
    sectionGallery.appendChild(card);
}

    })


fetch ("http://localhost:5678/api/categories")
.then ((reponse) =>reponse.json())
.then ((categories) => {
 
    

const BoutonAll = document.querySelector("#btn-1");
const BoutonObjets= document.querySelector("#btn-2");
const BoutonAppartements= document.querySelector("#btn-3");
const BoutonRestauEtHotel= document.querySelector("#btn-4");

//aficher tous les élements//



//afficher les objets//

BoutonObjets.addEventListener("click", (e)=>{
 console.log(e)   });
    
//afficher les appartements//
BoutonAppartements.addEventListener("click", ()=>{

    });
//afficher les restau et Hotel//

BoutonRestauEtHotel.addEventListener("click", ()=>{

});
});