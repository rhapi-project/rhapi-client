# rhapi-client
Client RHAPI JavaScript

## Installation

    npm install rhapi-client

Alternativement **rhapi-client-browser.js** (généré par browserify) est fourni pour être inséré directement dans une page html

    <script type="text/javascript" src="rhapi-client-browser.js"></script>


## Usage

### Instancier un *client*

    var module = require("rhapi-client");
    var client = new module.Client("https://demo.rhapi.net/demo01");


### Appeler une méthode


On utilise la notation pointée pour appeler un groupe (CCAM, Patients...) puis une méthode (create, read, readAll...).


### exemple 1 : création d'une fiche patient


    var args = {  
        nom: "Dupont",  
        prenom: "Martin"  
    };  
    client.Patients.create(args, success, error);// Va créer le patient


**success** et **error** sont des méthodes *callback* que vous définissez dans votre code et qui recoivent en paramètres 2 objets qui contiennent les résultats de la requête. Exemple :


    function success(datas, response) {  
        console.log(datas);// Affiche toutes les données  
        console.log(datas.nom);// Affiche "Dupont"  
        console.log(datas.prenom);// Affiche "Martin"  
        // etc  
    }  
    function error(datas, response) {  
        console.log(datas);// Affiche toutes les données  
        console.log(datas.httpError);// Affiche le code de l'erreur HTTP  
        console.log(datas.internalMessage);// Affiche une notice sur l'erreur.  
        // etc  
    }


### exemple 2 : recherche du patient d'identifiant unique 65

    var search = 65;  
    var options = {  
        // voir documentation RHAPI
    };  
    client.Patients.read(search, options, success, error);


### exemple 3 : recherche des actes CCAM comportant le terme *biopsie*

    var options = {  
        texte: "biopsie"  
    };
    client.CCAM.readAll(options, success, error);


### exemple 4 : modification d'une fiche patient

    var id = 65;  
    var options = {  
        ville: "Paris"  
    };  
    client.Patients.update(id, options, success, error);
    
