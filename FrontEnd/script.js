
    fetch("http://localhost:5678/api/works")
    .then ((reponse) => reponse.json())
    .then ((product) => {
        console.log (product);

        for (let i = 0; i < product.length; i++)


{  
    const article = product[i];
    const imageUrl= article.imageUrl;
    const title = article.title;

    const card = document.createElement ("div");

    const imageUrlElement = document.createElement("img");
    imageUrlElement.src = imageUrl;
    
    const titleElement = document.createElement("p");
    titleElement.innerText=title ;
    
    sectionGallery = document.querySelector (".gallery")
    card.appendChild(imageUrlElement);
    card.appendChild(titleElement);
    sectionGallery.appendChild(card);

}})

//aficher tous les élements//

fetch ("http://localhost:5678/api/categories")
.then ((reponse) => reponse.json())
.then ((product) => {

const BoutonAll = document.querySelector("#btn-1");
console.log(BoutonAll);
BoutonAll.addEventListener("click",() => { 
const projetFiltre = product.filter ((categoryId) => { return categoryId ===1; }) ;
console.log (projetFiltre);
    
})


const BoutonObjets = document.querySelector("#btn-2");
console.log(BoutonObjets);
BoutonObjets.addEventListener("click",() => {
const projetFiltre = product.filter ((categoryId) => {return categoryId === 2;}) ;
console.log (projetFiltre);
})

const BoutonAppartements = document.querySelector("#btn-3");
console.log(BoutonAppartements);
BoutonAppartements.addEventListener("click",() => {
const projetFiltre = product.filter ((categoryId) => {return categoryId === 3;}) ;
console.log (projetFiltre);

})

const BoutonRestauEtHotel = document.querySelector("#btn-4");
console.log(BoutonRestauEtHotel);
BoutonRestauEtHotel.addEventListener("click",() => {
const projetFiltre = product.filter ((categoryId) => {return categoryId ===4}) ;
console.log (projetFiltre); 
})

})
