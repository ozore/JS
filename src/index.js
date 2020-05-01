import { findDom, modifDomTitle, requestForge} from './functions.js'
//import all from './functions.js'
import { person } from './classes.js'

///Initialisation du titre de la page 
let titre="NIALYS";
if(titre != ""){ modifDomTitle(titre);}else{console.log("No title ini")}


///Création d'une nouvelle personne
let me = new person("Sylvain",25, "");
me.affichage();


///Gestion des évènements Event listenner + Setup de la ville de résidence
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

let request = new XMLHttpRequest();
request.onreadystatechange = function (){
    if (this.readyState == XMLHttpRequest.DONE && this.status ==200 ) {
        var response = JSON.parse(this.responseText);
        console.log(response.current_condition.condition);
    }
    else if(this.readyState == XMLHttpRequest.DONE && this.statut != 200){
        console.log("Request ended but no JSON returned, code");
        alert("sylvain");
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
request.send();

