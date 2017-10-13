class Client {
    constructor (baseUrl) {
        var THIS = this;
        this.baseUrl = baseUrl;
        /*if (this.baseUrl == "") {
            switch (clientSelected) {
            case ("Correspondant") :
                this.baseUrl = "https://demo.rhapi.net/demo01/Correspondants";
                break;
            case ("Images") :
                this.baseUrl = "https://demo.rhapi.net/demo01/Images";
                break;
            }
        }*/
        
        //console.log("clientSelected : " + clientSelected);
        //console.log("this.baseUrl : " + this.baseUrl);
        
        this.Administration = {
            read : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, );
            }
        }
        
        this.CCAM = {
            read : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            },
            
            readAll : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            },
            
            contextes : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            },
            
            tarif : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            }
        }
        
        this.Correspondants = {
            create : function (url, params, callback) {
                //console.log("THIS.baseUrl + url : " + THIS.baseUrl + url);
                THIS.post(THIS.baseUrl + url, params, callback);
            },
            
            read : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            },
            
            readAll : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            },
            
            update : function (url, params, callback) {
                THIS.put(THIS.baseUrl + url, params, callback);
            },
            
            destroy : function (url, params, callback) {
                THIS.delete(THIS.baseUrl + url, params, callback);
            },
            
            completion : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            }
        }
        
        this.Images = {
            create : function (url, params, callback) {
                THIS.post(THIS.baseUrl + url, params, callback);
            },
            
            read : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            },
            
            readAll : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            },
            
            update : function (url, params, callback) {
                THIS.put(THIS.baseUrl + url, params, callback);
            },
            
            destroy : function (url, params, callback) {
                THIS.delete(THIS.baseUrl + url, params, callback);
            },
            
            dupliquer : function (url, params, callback) {
                THIS.post(THIS.baseUrl + url, params, callback);
            }
        }
        
        this.MonCompte = {
            read : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            },
            
            update : function (url, params, callback) {
                THIS.put(THIS.baseUrl + url, params, callback);
            }
        }
        
        this.Patients = {
            create : function (url, params, callback) {
                THIS.post(THIS.baseUrl + url, params, callback);
            },
            
            read : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            },
            
            readAll : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            },
            
            update : function (url, params, callback) {
                THIS.put(THIS.baseUrl + url, params, callback);
            },
            
            destroy : function (url, params, callback) {
                THIS.delete(THIS.baseUrl + url, params, callback);
            },
            
            age : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            },
            
            completion : function (url, params, callback) {
                THIS.get(THIS.baseUrl + url, params, callback);
            }
        }
        
        //var clientNodeRestClient = require("rhapi-client-node-rest-client");
        
        //switch(clientSelected) {
        //case ("node-rest-client") :
            //this.client = new clientNodeRestClient.NodeRestClient();
        //    break;
        //}
        
        this.client = new NodeRestClient();
    }
    
    clientGet () {
        return this.client;
    }
    
    clientSet (valNew) {
        this.client = valNew;
    }
    
    get (url, params, callback) {
        this.client.get(url, params, callback);
    }
    
    post (url, params, callback) {
        this.client.post(url, params, callback);
    }
    
    put (url, params, callback) {
        this.client.put(url, params, callback);
    }
    
    delete (url, params, callback) {
        this.client.delete(url, params, callback);
    }
    
    callbackReturnTest (datas, response) {
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
    
    get (url, params, callback) {
        this.client.get(url, params, function(datas, response){
            callback(datas, response);
        });
    }
    
    post (url, params, callback) {
        this.client.post(url, params, function(datas, response){
            callback(datas, response);
        });
    }
    
    put (url, params, callback) {
        this.client.put(url, params, function(datas, response){
            callback(datas, response);
        });
    }
    
    delete (url, params, callback) {
        this.client.delete(url, params, function(datas, response){
            callback(datas, response);
        });
    }
}

exports.Client = Client;