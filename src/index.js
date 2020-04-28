import { findDom, modifDomTitle} from './functions.js'
//import all from './functions.js'
import { person } from './classes.js'

//Initialisation du titre
let titre="NIALYS";
if(titre != ""){ modifDomTitle(titre);}else{console.log("No title ini")}


//Nouvelle personne
let me = new person("Sylvain",25, "");
me.affichage();


//Event listenner + Setup de la ville de résidence
const listen = document.getElementById('button');
listen.addEventListener('click', console.log("Ecoute Evenement sucess"));


document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('select[name="ville"]').onchange=changeEventHandler;
},false);

function changeEventHandler(event){
    if(!event.target.value) alert('Please Select a city');
    else ( me.move(event.target.value));
    if(me.city != ""){me.affichageVille();}
}

console.log(me.city);
