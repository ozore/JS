export class  person {
    constructor(name, age, ville){
        this.name=name;
        this.age=age;
        this.city=ville;
    }
    move(newVille){
        this.city=newVille;
    }
    
    affichage(){
        //création des éléments pour l'affichage 
        let element = document.getElementById('person');
        let element2 = document.createElement("p");
        

        //Définition du texte dans la page 
        element.innerHTML="Your name is:  <b>" + this.name + "</b>";    
        element2.innerHTML="You are  <b>" + this.age;
        
        
        //Insertion du texte dans la page
        element.appendChild(element2);
       
    }

    affichageVille(){
        let element = document.getElementById('person');
        let element3 = document.createElement("p");
        element3.innerHTML="You live in <b>" + this.city +"</b>";
        element.appendChild(element3);
    }
}