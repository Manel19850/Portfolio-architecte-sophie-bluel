
    fetch("http://localhost:5678/api/works")
    .then ((reponse) => reponse.json())
    .then ((product) => {

    for (let i = 0; i < product.length; i++)

{  
    const article = product[i];
    const imageUrl= article.imageUrl;
    const title = article.title;
    
    const card = document.createElement ("div")

    const imageUrlElement = document.createElement("img");
    imageUrlElement.src =imageUrl;
    
    const titleElement = document.createElement("p");
    titleElement.innerText= title ;
    
    sectionGallery = document.querySelector (".gallery")
    card.appendChild(imageUrlElement);
    card.appendChild(titleElement);
    sectionGallery.appendChild(card);
}

    })


