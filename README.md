# rhapi-client
Client RHAPI Node.js

###### Manuel de la version alpha 0.1.13

### Installation

npm install rhapi-client

### Usage

Créer un fichier JS dans le répertoire de l'installation, par exemple app.js

##### app.js


    function callbackReturnTest (datas, response) {  
        console.log("datas :");  
        console.dir(datas);  
        console.log("response :");  
        console.dir(response);  
    }  
    
    var module = require("rhapi-client");  


baseUrl doit être le début de l'adresse d'un groupe. Ex : "https://demo.rhapi.net/demo01/Correspondants"  
ou bien : "https://demo.rhapi.net/demo01/Patients".


    var baseUrl = "https://demo.rhapi.net/demo01/Patients";  
    var client = new module.Client(baseUrl);


args contient le plus souvent des paramètres lors des méthodes POST ou PUT.


    var args = {  
        headers: {"Content-Type": "application/json"}  
    };


url correspond à l'ajout de paramètres. Ex : "/" + "65"  
url est concaténé à baseUrl passé dans le constructeur, cela peut donner : "https://demo.rhapi.net/demo01/Patients/65"


    var url = "/" + "65";  
    client.Patients.read(url, args, callbackReturnTest);


Donc pour un readAll, on passe une chaîne vide car la baseUrl suffit


    client.Patients.readAll("", args, callbackReturnTest);


##### Test

nodejs app.js