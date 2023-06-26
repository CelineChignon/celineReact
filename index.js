const btn = document.querySelector(`button`)
const container = document.querySelector(`#container`)

//Création d'une fonction pour éviter de répéter le même code :
// je choisis un nom de fonction dans l'exemple ci-dessous createNodeElement, entre parenthèse je choisis le nom de paramètre, après avoir effectué une fléche j'ouvre des accolades pour executer la fonction. Par exemple pour mon premier paramètre tagType je souhaite que ma fonction crée un nouveelle élément (ex des paragraphes, des titres ou autre ) Donc pour chaque paramètre je determine entre les accolades ce que je souhaite que la fonction execute. je cree également une variable nommée result que je retour en fin de fonction. Cette dernière manipulation me sers a récuperer le résultat de ma fonction 
createNodeElement = (tagType, className, text = "", imgSrc = "") => {
    const result = document.createElement(tagType)
    result.setAttribute("class", className);
    result.setAttribute("src", imgSrc);
    result.textContent = text;
    return result
}


btn.addEventListener(`click`, () => {

    const articleElement = createNodeElement("article", "article-piscine")
    container.appendChild(articleElement)

    //RAJOUT D'UN TITRE 

    const titleElement = createNodeElement("h1", "containerTitle", `Hello La Picsine`)
    articleElement.appendChild(titleElement)

    // RAJOUT D'UNE IMAGE
    const imgElement = createNodeElement("img", "containerImg", "", "https://cdn.generationvoyage.fr/2020/05/montagnes-france-630x355.jpg.webp")
    articleElement.appendChild(imgElement)

    // RAJOUT D'UN PARAGRAPHE
    const contenu = createNodeElement("p", "containerParagraphe", `Je suis un paragraphe`)
    articleElement.appendChild(contenu)
});













//Exercice 1 :

// const btn = document.querySelector(`button`)


// btn.addEventListener(`click`, () => {
//     const container = document.querySelector(`#container`)
//     const articleElement = document.createElement(`article`)
//     container.appendChild(articleElement)

//     //RAJOUT D'UN TITRE
//     const titleElement = document.createElement(`h1`)
//     titleElement.textContent = `Hello La Picsine`
//     articleElement.appendChild(titleElement)

//     //RAJOUT D'UNE IMAGE
//     const imgElement = document.createElement(`img`)
//     imgElement.setAttribute("src", "https://cdn.generationvoyage.fr/2020/05/montagnes-france-630x355.jpg.webp");
//     imgElement.style.width = '50%'
//     articleElement.appendChild(imgElement)

//     //RAJOUT D'UN PARAGRAPHE
//     const contenu = document.createElement(`p`)
//     contenu.textContent = `Je suis un paragraphe`
//     articleElement.appendChild(contenu)
// })