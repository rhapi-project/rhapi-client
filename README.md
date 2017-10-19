# rhapi-client
Client RHAPI Node.js

###### Manuel de la version alpha 0.4.3

## Installation


Au choix, utiliser la méthode 1. ou 2.


### 1. Via npm


npm install rhapi-client


### 2. Version navigateur


Un fichier **rhapi-client-browser.js** est également présent dans le dossier du module. Il peut-être appelé dans du code HTML via une balise *<script></script>* :


    <script type="text/javascript" src="rhapi-client-browser.js"></script>


## Usage

### Instancier un *client*


    var module = require("rhapi-client");


Quand ou un objet **client** est instancié, il reçoit comme argument l'adresse d'un serveur RHAPI. Ex :


    var client = new module.Client("https://demo.rhapi.net/demo01");


### Appeler une méthode


On utilise la notation pointée pour appeler un objet qui correspond à un nom du groupe (CCAM, Patients...) puis une méthode pour le type de requête (create, read, readAll...).


### exemple avec un *create*


**args** contient les données du patient qui va être créé. Il est possible de renseigner maintenant toutes les données ou seulement certaines. Une méthode **update** sera toujours possible plus tard pour mettre à jour le patient.


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


### exemple avec un *read*


**search** correspond à un identifiant ou un code d'acte.  
**options** correspond à des paramètres facultatifs quand on appelle un *read*.


    var search = 65;  
    var options = {  
        modifiedSince: 2  
    };  
    client.Patients.read(search, options, success, error);// Récupère le patient qui a pour identifiant 65.


### exemple avec un *readAll*


**options** correspond à des paramètres facultatifs.


    var options = {  
        texte: "bio"  
    };  
    client.CCAM.readAll(options, success, error);


### exemple avec un *update*


    var id = 65;  
    var options = {  
        ville: "Paris"  
    };  
    client.Patients.update(id, options, success, error);// Va mettre à jour la ville du patient ayant pour identifiant 65.