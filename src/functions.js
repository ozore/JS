//Affichage des résultat 
const affichage = document.getElementById('screen');
//affichage.innerHTML="Bonjour";


//Recherche d'éléments dans le DOM 
const findDom = () => {
    let one = document.getElementById('main-content');
    let three = document.getElementsByTagName('article');
    let two = document.getElementsByClassName('important');
    let four = document.querySelector('article > ul.important > li');
    let tab = [one,two,three,four.nextElementSibling];
    
    for(let i in tab){
        console.log(tab[i]);
    }
}

//Modificaiton de contenu dans le DOM
const modifDomTitle = (titre) => {
    let elmt = document.getElementById('main');
    elmt.innerHTML="<h1>" + titre + "</h1>";
}


//Accès à la classe des éléments
const classAccess = () => {
    let test = elmt.classList.add('custom');
    if(test){console.log("Class Custom found");}else{console.log("Error class insertion");}
    elmt.classList.remove('custom');
    if(test){console.log("Class Custom found");}
}

//Création d'une requête HTTP
let requestForge = () => {
    var request = new XMLHttpRequest ();
    request.onreadystatechange = function (){
        let requestState = this.status;  //code retourne par la requete 
        let answer = JSON.parse(this.response); //reponse parsée
    }
}

export {findDom, modifDomTitle, classAccess, requestForge };
//export default all;