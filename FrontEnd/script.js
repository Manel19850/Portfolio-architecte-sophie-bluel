
    fetch("http://localhost:5678/api/works")
    .then ((reponse) => reponse.json())
    .then ((product) => {
    
    for (let i = 0; i < product.length; i++)

{  
    const article = product[i];
    const imageUrl= article.imageUrl;
    const title = article.title;
    console.log (product);

    const card = document.createElement ("div");


    const imageUrlElement = document.createElement("img");
    imageUrlElement.src = imageUrl;
    
    const titleElement = document.createElement("p");
    titleElement.innerText=title ;
    
    sectionGallery = document.querySelector (".gallery")
    card.appendChild(imageUrlElement);
    card.appendChild(titleElement);
    sectionGallery.appendChild(card);
}
   


//aficher tous les élements//
const BoutonAll = document.querySelector("#btn-1");
BoutonAll.addEventListener("click", function() {
;
});

//afficher les objets//
const BoutonObjets= document.querySelector("#btn-2");
BoutonObjets.addEventListener("click", function (){
btn2 = product.filter(product=> product.categoryId === 1);})

console.log (BoutonObjets);
    
//afficher les appartements//
const BoutonAppartements= document.querySelector("#btn-3");
BoutonAppartements.addEventListener("click", ()=>{
btn3 = product.filter(product=> product.categoryId === 2 );})
   
//afficher les restau et Hotel//

const BoutonRestauEtHotel= document.querySelector("#btn-4");
BoutonRestauEtHotel.addEventListener("click", ()=>{
    btn4 = product.filter(product=> product.categoryId === 3);})

})
