//
//        
// TODO: tester / debuger les groupes Administration et Correspondants
// TODO: coder les autres groupes comme Administration et Correspondants...
//
// TODO penser à gérer les retours d'erreur
// TODO pour les comparaisons ne pas utiliser == mais === et !== au lieu de != 
// TODO utiliser des utilitaires comme eslint qui détecteront ce type d'erreur
// 
// TODO RAPPEL
// TODO produire une version browser de ce client
// TODO documenter
//


class Client {
    constructor (baseUrl) {
        var THIS = this;
        this.baseUrl = baseUrl;
        this.Administration = {
            read : function (search, callback) {
                var url = THIS.baseUrl + "/Administration/" + search;
                THIS.get(url, callback);
            }
        }
        
        this.CCAM = {
            read : function (search, params, callback) {
                var url = THIS.baseUrl + "/CCAM/" + search + THIS.encodeParameters(params);
                THIS.get(url, callback);
            },
            
            readAll : function (params, callback) {
                var url = THIS.baseUrl + "/CCAM" + THIS.encodeParameters(params);
                console.log("url (before get()) : " + url);
                THIS.get(url, callback);
            },
            
            contextes : function (callback) {
                var url = THIS.baseUrl + "/CCAM/contextes";
                THIS.get(url, callback);
            },
            
            tarif : function (search, params, callback) {
                var url = THIS.baseUrl + "/CCAM/" + search + "/tarif" + THIS.encodeParameters(params);
                THIS.get(url, callback);
            }
        }
        
        this.Correspondants = {
            create : function (params, callback) {
                THIS.post(THIS.baseUrl + "/Correspondants", params, callback);
            },
            
            read : function (search, params, callback) {
                var url = THIS.baseUrl + "/Correspondants/" + search + THIS.encodeParameters(params);
                THIS.get(url, callback);
            },
            
            readAll : function (params, callback) {
                var url = THIS.baseUrl + "/Correspondants" + THIS.encodeParameters(params);
                THIS.get(url, callback);
            },
            
            update : function (search, params, callback) {
                var url = THIS.baseUrl + "/Correspondants/" + search;
                THIS.put(url, params, callback);
            },
            
            destroy : function (search, callback) {
                var url = THIS.baseUrl + "/Correspondants/" + search;
                console.log("url (before get()) : " + url);
                THIS.destroy(url, callback);
            },
            
            completion : function (params, callback) {
                var url = THIS.baseUrl + "/Correspondants/completion" + THIS.encodeParameters(params);
                THIS.get(url, callback);
            }
        }
        
        // TODO: tester / debuger les groupes Administration et Correspondants
        // TODO: coder les groupes suivants comme Administration et Correspondants...
        //
        this.Images = {
            create : function (params, callback) {
                THIS.post(THIS.baseUrl + "/Images", params, callback);
            },
            
            read : function (search, params, callback) {
                var url = THIS.baseUrl + "/Images/" + search + THIS.encodeParameters(params);
                console.log("url (before get()) : " + url);
                THIS.get(url, callback);
            },
            
            readAll : function (params, callback) {
                var url = THIS.baseUrl + "/Images" + THIS.encodeParameters(params);
                console.log("url (before get()) : " + url);
                THIS.get(url, callback);
            },
            
            update : function (search, params, callback) {
                var url = THIS.baseUrl + "/Images/" + search;
                console.log("url (before get()) : " + url);
                THIS.put(url, params, callback);
            },
            
            destroy : function (search, callback) {
                var url = THIS.baseUrl + "/Images/" + search;
                console.log("url (before get()) : " + url);
                THIS.destroy(url, callback);
            },
            
            dupliquer : function (search, callback) {
                var url = THIS.baseUrl + "/Images/" + search + "/dupliquer";
                console.log("url (before get()) : " + url);
                THIS.post(url, {}, callback);
            }
        }
        
        this.MonCompte = {
            read : function (callback) {
                THIS.get(THIS.baseUrl + "/MonCompte", callback);
            },
            
            update : function (params, callback) {
                THIS.put(THIS.baseUrl + "/MonCompte", params, callback);
            }
        }
        
        this.Patients = {
            create : function (params, callback) {
                THIS.post(THIS.baseUrl + "/Patients", params, callback);
            },
            
            read : function (search, params, callback) {
                var url = THIS.baseUrl + "/Patients/" + search + THIS.encodeParameters(params);
                console.log("url (before get()) : " + url);
                THIS.get(url, callback);
            },
            
            readAll : function (params, callback) {
                var url = THIS.baseUrl + "/Patients" + THIS.encodeParameters(params);
                console.log("url (before get()) : " + url);
                THIS.get(url, callback);
            },
            
            update : function (search, params, callback) {
                var url = THIS.baseUrl + "/Patients/" + search;
                console.log("url (before get()) : " + url);
                THIS.put(url, params, callback);
            },
            
            destroy : function (search, callback) {
                var url = THIS.baseUrl + "/Patients/" + search;
                console.log("url (before get()) : " + url);
                THIS.destroy(url, callback);
            },
            
            age : function (search, params, callback) {
                var url = THIS.baseUrl + "/Patients/" + search + "/age" + THIS.encodeParameters(params);
                console.log("url (before get()) : " + url);
                THIS.get(url, callback);
            },
            
            completion : function (params, callback) {
                var url = THIS.baseUrl + "/Patients/completion" + THIS.encodeParameters(params);
                console.log("url (before get()) : " + url);
                THIS.get(url, callback);
            }
        }
        
        this.client = new NodeRestClient();
    }
    
    clientGet () {
        return this.client;
    }
    
    clientSet (valNew) {
        this.client = valNew;
    }
    
    encodeParameters(params) {
        var ret = [];
        var paramValue;
        var firstPass;
        for (var d in params) {
            firstPass = true;
            paramValue = "";
            if (! Array.isArray(params[d]))
                paramValue = params[d];
            else {
                for (var f in params[d]) {
                    paramValue += (firstPass === false)?"+":"";
                    paramValue += params[d][f];
                    firstPass = false;
                }
            }
            
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(paramValue));
        }
        
        var rets = ret.join('&');
        if (rets !== '') {
            rets = '?' + rets;
        }
        return rets;
    }
    
    get (url, callback) {
        this.client.get(url, callback);
    }
    
    post (url, params, callback) {
        this.client.post(url, params, callback);
    }
    
    put (url, params, callback) {
        this.client.put(url, params, callback);
    }
    
    destroy (url, callback) {
        this.client.destroy(url, callback);
    }
    
    callbackReturnTest (datas, response) {
        console.log("datas :");
        console.dir(datas);
        console.log("response :");
        console.dir(response);
    }
}

class NodeRestClient {
    //
    constructor () {
        var Client = require("node-rest-client").Client;
        this.client = new Client();
    }
    
    clientGet () {
        return this.client;
    }
    
    clientSet (valNew) {
        this.client = valNew;
    }
    
    get (url, /*params,*/ callback) {
        this.client.get(url, /*params,*/ function(datas, response){ 
            // TODO je ne comprends pas : si votre client REST ne gère par les paramètres en url, pourquoi lui transmettre ?
            // Par contre si il les gère, il est idiot de les passer nous même en url avec des THIS.encodeParameters
            callback(datas, response); // TODO: callback(datas, response, error);
        });
    }
    
    post (url, params, callback) {
        //
        // TODO: gérer ça ici : header = "Content-Type: application/json";
        //
        //params.headers = {"Content-Type": "application/json"};
        //params.header = {"Content-Type": "application/json"};
        //params.headers = "Content-Type application/json";
        //params.header = "Content-Type application/json";
        //params.headers = "Content-Type: application/json";
        //params.header = "Content-Type: application/json";
        //params.headers = "application/json";
        //params.header = "application/json";
        this.client.post(url, params, function(datas, response){
            callback(datas, response); // TODO: callback(datas, response, error);
        });
    }
    
    put (url, params, callback) {
        //
        // TODO: gérer ça ici : header = "Content-Type: application/json";
        //
        this.client.put(url, params, function(datas, response){
            callback(datas, response); // TODO: callback(datas, response, error);
        });
    }
    
    destroy (url, callback) {
        this.client.delete(url, {}, function(datas, response){
            callback(datas, response); // TODO: callback(datas, response, error);
        });
    }
}

exports.Client = Client;