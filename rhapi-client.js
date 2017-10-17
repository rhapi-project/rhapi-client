class Client {
    constructor (baseUrl) {
        var THIS = this;
        this.baseUrl = baseUrl;
        this.Administration = {
            read : function (search, reponse, error) {
                var url = THIS.baseUrl + "/Administration/" + search;
                THIS.get(url, {}, reponse, error);
            }
        }
        
        this.CCAM = {
            read : function (search, params, reponse, error) {
                var url = THIS.baseUrl + "/CCAM/" + search;
                THIS.get(url, params, reponse, error);
            },
            
            readAll : function (params, reponse, error) {
                var url = THIS.baseUrl + "/CCAM";
                THIS.get(url, params, reponse, error);
            },
            
            contextes : function (reponse, error) {
                var url = THIS.baseUrl + "/CCAM/contextes";
                THIS.get(url, {}, reponse, error);
            },
            
            tarif : function (search, params, reponse, error) {
                var url = THIS.baseUrl + "/CCAM/" + search + "/tarif";
                THIS.get(url, params, reponse, error);
            }
        }
        
        this.Correspondants = {
            create : function (params, reponse, error) {
                THIS.post(THIS.baseUrl + "/Correspondants", params, reponse, error);
            },
            
            read : function (search, params, reponse, error) {
                var url = THIS.baseUrl + "/Correspondants/" + search;
                THIS.get(url, params, reponse, error);
            },
            
            readAll : function (params, reponse, error) {
                var url = THIS.baseUrl + "/Correspondants";
                THIS.get(url, params, reponse, error);
            },
            
            update : function (search, params, reponse, error) {
                var url = THIS.baseUrl + "/Correspondants/" + search;
                THIS.put(url, params, reponse, error);
            },
            
            destroy : function (search, reponse, error) {
                var url = THIS.baseUrl + "/Correspondants/" + search;
                THIS.destroy(url, reponse, error);
            },
            
            completion : function (params, reponse, error) {
                var url = THIS.baseUrl + "/Correspondants/completion";
                THIS.get(url, params, reponse, error);
            }
        }
        
        this.Images = {
            create : function (params, reponse, error) {
                THIS.post(THIS.baseUrl + "/Images", params, reponse, error);
            },
            
            read : function (search, params, reponse, error) {
                var url = THIS.baseUrl + "/Images/" + search;
                THIS.get(url, params, reponse, error);
            },
            
            readAll : function (params, reponse, error) {
                var url = THIS.baseUrl + "/Images";
                THIS.get(url, reponse, error);
            },
            
            update : function (search, params, reponse, error) {
                var url = THIS.baseUrl + "/Images/" + search;
                THIS.put(url, params, reponse, error);
            },
            
            destroy : function (search, reponse, error) {
                var url = THIS.baseUrl + "/Images/" + search;
                THIS.destroy(url, reponse, error);
            },
            
            dupliquer : function (search, reponse, error) {
                var url = THIS.baseUrl + "/Images/" + search + "/dupliquer";
                THIS.post(url, {}, reponse, error);
            }
        }
        
        this.MonCompte = {
            read : function (reponse, error) {
                THIS.get(THIS.baseUrl + "/MonCompte", reponse, error);
            },
            
            update : function (params, reponse, error) {
                THIS.put(THIS.baseUrl + "/MonCompte", params, reponse, error);
            }
        }
        
        this.Patients = {
            create : function (params, reponse, error) {
                THIS.post(THIS.baseUrl + "/Patients", params, reponse, error);
            },
            
            read : function (search, params, reponse, error) {
                var url = THIS.baseUrl + "/Patients/" + search;
                THIS.get(url, params, reponse, error);
            },
            
            readAll : function (params, reponse, error) {
                var url = THIS.baseUrl + "/Patients";
                THIS.get(url, params, reponse, error);
            },
            
            update : function (search, params, reponse, error) {
                var url = THIS.baseUrl + "/Patients/" + search;
                THIS.put(url, params, reponse, error);
            },
            
            destroy : function (search, reponse, error) {
                var url = THIS.baseUrl + "/Patients/" + search;
                THIS.destroy(url, reponse, error);
            },
            
            age : function (search, params, reponse, error) {
                var url = THIS.baseUrl + "/Patients/" + search + "/age";
                THIS.get(url, params, reponse, error);
            },
            
            completion : function (params, reponse, error) {
                var url = THIS.baseUrl + "/Patients/completion";
                THIS.get(url, params, reponse, error);
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
    
    get (url, params, reponse, error) {
        this.client.get(url, params, reponse, error);
    }
    
    post (url, params, reponse, error) {
        this.client.post(url, params, reponse, error);
    }
    
    put (url, params, reponse, error) {
        this.client.put(url, params, reponse, error);
    }
    
    destroy (url, reponse, error) {
        this.client.destroy(url, reponse, error);
    }
    
    callbackReturnTest (datas, response) {
        console.log("datas :");
        console.dir(datas);
        console.log("response :");
        console.dir(response);
    }
    
    callbackErrorReturnTest (datas, response) {
        console.log("datas :");
        console.dir(datas);
        console.log("response :");
        console.dir(response);
    }
}

class NodeRestClient {
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
    
    get (url, params, success, error) {
        var args = {
            parameters: params
        };
        this.client.get(url, args, function(datas, response){
            if (typeof datas.httpError !== "undefined")
                error(datas, response);
            else
                success(datas, response);
        });
    }
    
    post (url, params, success, error) {
        var args = {
            data: params,
            headers: {"Content-Type": "application/json"}
        }
        this.client.post(url, args, function(datas, response){
            if (typeof datas.httpError !== "undefined")
                error(datas, response);
            else
                success(datas, response);
        });
    }
    
    put (url, params, success, error) {
        var args = {
            data: params,
            headers: {"Content-Type": "application/json"}
            // cors
        }
        this.client.put(url, args, function(datas, response){
            if (typeof datas.httpError !== "undefined")
                error(datas, response);
            else
                success(datas, response);
        });
    }
    
    destroy (url, success, error) {
        this.client.delete(url, {}, function(datas, response){
            if (typeof datas.httpError !== "undefined")
                error(datas, response);
            else
                success(datas, response);
        });
    }
}

exports.Client = Client;