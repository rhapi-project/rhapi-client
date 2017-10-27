# rhapi-client

Un client RHAPI JavaScript

*RHAPI is a RESTful Health API*

## Installation

    npm install rhapi-client

Alternativement **rhapi-client-browser.js** (généré par browserify) est fourni pour être inséré directement dans une page html

    <script type="text/javascript" src="rhapi-client-browser.js"></script>

## Usage

### Instancier un client sans authentification (tests et démos)

    var Client = require("rhapi-client").Client;
    var client = new Client("https://demo.rhapi.net/demo01");
    // les groupes/méthodes RHAPI sont accessibles ici
    
### Instancier un client avec authentification (production)

    var Client = require("rhapi-client").Client;
    var client = new Client();
    client.authorize(
        //   auth url                     app token            username    password
        "https://auth-dev.rhapi.net", "VGVzdEFwcDpUZXN0QXBw", "TestUser", "TestUser",
        function() { // success
            // auth ok
            // les groupes/méthodes RHAPI sont accessibles ici
        },
        function(datas, response) {
            console.log(datas); // erreur d'authentification
            console.log(response);
            // erreur username/password ?
            // essayer à nouveau ?
        }
    );

### Appeler une méthode

On utilise la notation pointée pour appeler un groupe (CCAM, Patients...) puis une méthode (create, read, readAll...).

Les groupes, méthodes et paramètres utilisés par **rhapi-client** reprennent exactement les mêmes fonctionnalités et la même terminologie que l'API REST.

Pour plus d'informations, il conviendra donc de se référer à la documentation **RHAPI** : https://demo.rhapi.net/apidoc01/.

### exemple 1 : création d'une fiche patient

    var args = {  
        nom: "Dupont",  
        prenom: "Martin"  
    };  
    client.Patients.create(args, success, error);

    function success(datas, response) {  
        console.log(datas); // toutes les données  
        console.log(datas.nom); // "Dupont"  
        console.log(datas.prenom); // "Martin"  
        // etc  
    }  
    function error(datas, response) {  
        console.log(datas); // toutes les données  
        console.log(datas.httpError); // le code erreur 
        console.log(datas.internalMessage); // notice sur l'erreur.  
        // etc  
    }


### exemple 2 : recherche du patient d'identifiant unique 65

    var search = 65;  
    var options = {  
        // voir documentation RHAPI
    };  
    client.Patients.read(search, options, success, error);

### exemple 3 : modification d'une fiche patient

    var id = 65;  
    var options = {  
        ville: "Paris"  
    };  
    client.Patients.update(id, options, success, error);


### exemple 4 : recherche des actes CCAM comportant le terme *biopsie*

    var options = {  
        texte: "biopsie"  
    };
    client.CCAM.readAll(options, success, error);
