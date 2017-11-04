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

### Instancier un formulaire d'envoi de fichier

La fonction **addForm(form, groupe)** permet d'instancier un formulaire HTML.

La fonction **addForm(form, groupe)** permet de définir simplement tous les attributs nécessaires au bon fonctionnement du formulaire d'envoi de fichier.

La fonction **addForm(form, groupe)** permet le cas échéant, une mise à jour dynamique de l'URL dans le cadre d'une utilisation avec **authorize()** .

Par exemple avec **client.addForm(document.getElementById("form-test"), "Images")**

Si avant l'appel addForm on a

    <form id="form-test"> 
        <input type="file"/>
        <input type="submit">
    </form>

Après addForm on obtientra quelque chose comme

     <form id="form-test" action="https://localhost/Images" method="post" enctype="multipart/form-data"> 
        <input name="image" type="file"/>
        <input type="submit">
     </form>
     
Voici un exemple minimaliste mais fonctionnel d'utilisation d'un formulaire avec les images

    <!-- 
        form-exemple.html
    -->
    <html>
    <head>
        <title>Images RHAPI - Formulaire d'envoi</title>
        <style>
            body {
                margin: 20px;
                font-family: Helvetica,Arial;
                font-size: 24;
            }
            label {
                color: #404040;
            }
            td {
                padding: 10px;
                background: #e0e0e0;
            }
        </style>
        <script src="rhapi-client-browser.js"></script>
    </head>
    <body>
        <!-- utilisation d'un iframe masqué comme cible du formulaire -->
        <iframe name="result-frame" srcdoc="" onload="refresh(false);" style="display: none">
        </iframe>
        <form id="form-image" target="result-frame">
            <input type="file"><br>
            <label>L'identifiant du praticien est fixé à 500</label>
            <input name="idPraticien" type="hidden" value=500><br>
            <label>Choisissez l'identifiant du patient : </label>
            <input name="idPatient" type="Number" min=1 max=1000 value=1><br>
            <input type="submit" value="Valider l'enregistrement de l'image">
        </form>
        <input type="button" value="Effacer toutes les images" onclick="refresh(true)">
        <table id="list"></table>
        <script type="text/javascript">
            var Client = require("rhapi-client").Client;
            var client = new Client("https://demo.rhapi.net/demo01");
            var form = document.getElementById("form-image");
            client.addForm(form, "Images");
            function refresh(removeAll) {
                client.Images.readAll(
                    {
                        _idPraticien: 500,
                        limit: 1000,
                        sort: "idPatient"
                    },
                    function(datas, response) {
                        var l = datas.results.length;
                        var list = "<th>Id Patient</th><th>Nom du fichier</th><th>Image</th>";
                        for (var i = 0; i < l; i++) {
                            var image = datas.results[i];
                            if (removeAll) {
                                client.Images.destroy(image.id, function() {}, function() {});
                            }
                            else {
                                list += "<tr><td>" + image.idPatient + 
                                        "</td><td>" + image.fileName + 
                                        "</td><td><image src='" + image.image + "'>";
                            }
                        }
                        document.getElementById("list").innerHTML = list;
                    },
                    function(datas, response) {
                        console.log("error");
                        console.log(datas);
                    }
                );
            }
        </script>
    </body>
    </html>


### Autre exemple (1) : création d'une fiche patient

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


### Autre exemple (2) : recherche du patient d'identifiant unique 65

    var search = 65;  
    var options = {  
        // voir documentation RHAPI
    };  
    client.Patients.read(search, options, success, error);

### Autre exemple (3) : modification d'une fiche patient

    var id = 65;  
    var options = {  
        ville: "Paris"  
    };  
    client.Patients.update(id, options, success, error);


### Autre exemple (4) : recherche des actes CCAM comportant le terme *biopsie*

    var options = {  
        texte: "biopsie"  
    };
    client.CCAM.readAll(options, success, error);
    

