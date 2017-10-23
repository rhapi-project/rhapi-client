class Client {
    constructor (baseUrl) {
        console.debug("== Client == constructor() ==");
        const THIS = this;
        this.baseUrl = baseUrl;
        this.webUrl = null;
        this.client = new NodeRestClient(THIS, null, null);
        
        this.Administration = {
            read : function (search, success, error) {
                //var url = THIS.baseUrl + "/Administration/" + search;
                THIS.webUrlSet(THIS.baseUrl + "/Administration/" + search);
                THIS.get({}, success, error);
            }
        }
        
        this.CCAM = {
            read : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/CCAM/" + search);
                THIS.get(params, success, error);
            },
            
            readAll : function (params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/CCAM");
                THIS.get(params, success, error);
            },
            
            contextes : function (success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/CCAM/contextes");
                THIS.get({}, success, error);
            },
            
            tarif : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/CCAM/" + search + "/tarif");
                THIS.get(params, success, error);
            }
        }
        
        this.Correspondants = {
            create : function (params, success, error) {
                THIS.post(THIS.baseUrl + "/Correspondants", params, success, error);
            },
            
            read : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Correspondants/" + search);
                THIS.get(params, success, error);
            },
            
            readAll : function (params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Correspondants");
                THIS.get(params, success, error);
            },
            
            update : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Correspondants/" + search);
                THIS.put(params, success, error);
            },
            
            destroy : function (search, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Correspondants/" + search);
                THIS.destroy(success, error);
            },
            
            completion : function (params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Correspondants/completion");
                THIS.get(params, success, error);
            }
        }
        
        this.Images = {
            create : function (params, success, error) {
                THIS.post(THIS.baseUrl + "/Images", params, success, error);
            },
            
            read : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Images/" + search);
                THIS.get(params, success, error);
            },
            
            readAll : function (params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Images");
                THIS.get(success, error);
            },
            
            update : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Images/" + search);
                THIS.put(params, success, error);
            },
            
            destroy : function (search, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Images/" + search);
                THIS.destroy(success, error);
            },
            
            dupliquer : function (search, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Images/" + search + "/dupliquer");
                THIS.post({}, success, error);
            }
        }
        
        this.MonCompte = {
            read : function (success, error) {
                THIS.get(THIS.baseUrl + "/MonCompte", success, error);
            },
            
            update : function (params, success, error) {
                THIS.put(THIS.baseUrl + "/MonCompte", params, success, error);
            }
        }
        
        this.Patients = {
            create : function (params, success, error) {
                THIS.post(THIS.baseUrl + "/Patients", params, success, error);
            },
            
            read : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Patients/" + search);
                THIS.get(params, success, error);
            },
            
            readAll : function (params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Patients");
                THIS.get(params, success, error);
            },
            
            update : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Patients/" + search);
                THIS.put(params, success, error);
            },
            
            destroy : function (search, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Patients/" + search);
                THIS.destroy(success, error);
            },
            
            age : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Patients/" + search + "/age");
                THIS.get(params, success, error);
            },
            
            completion : function (params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Patients/completion");
                THIS.get(params, success, error);
            }
        }
        
        this.Plannings = {
            create : function (params, success, error) {
                THIS.post(THIS.baseUrl + "/Plannings", params, success, error);
            },
            
            read : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Plannings/" + search);
                THIS.get(params, success, error);
            },
            
            readAll : function (params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Plannings");
                THIS.get(params, success, error);
            },
            
            update : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Plannings/" + search);
                THIS.put(params, success, error);
            },
            
            destroy : function (search, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Plannings/" + search);
                THIS.destroy(success, error);
            },
            
            actualiser : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/Plannings/" + search + "/actualiser");
                THIS.get(params, success, error);
            }
        }
        
        this.RendezVous = {
            create : function (params, success, error) {
                THIS.post(THIS.baseUrl + "/RendezVous", params, success, error);
            },
            
            read : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/RendezVous/" + search);
                THIS.get(params, success, error);
            },
            
            readAll : function (params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/RendezVous");
                THIS.get(params, success, error);
            },
            
            update : function (search, params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/RendezVous/" + search);
                THIS.put(params, success, error);
            },
            
            destroy : function (search, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/RendezVous/" + search);
                THIS.destroy(success, error);
            },
            
            actualiser : function (params, success, error) {
                THIS.webUrlSet(THIS.baseUrl + "/RendezVous/actualiser");
                THIS.get(params, success, error);
            }
        }
    }
    
    clientGet () {
        return this.client;
    }
    
    webUrlGet () {
        return this.webUrl;
    }
    
    clientSet (valNew) {
        this.client = valNew;
    }
    
    webUrlSet (valNew) {
        this.webUrl = valNew;
    }
    
    get (params, success, error) {
        this.client.get(params, success, error);
    }
    
    post (params, success, error) {
        this.client.post(params, success, error);
    }
    
    put (params, success, error) {
        this.client.put(params, success, error);
    }
    
    destroy (success, error) {
        this.client.destroy(success, error);
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

class ClientAuth extends Client {
    constructor (baseUrl, appToken, login, pass) {
        super(baseUrl);
        //const SUPER_THIS = super().THIS;
        //const THIS = this;
        console.log("== ClientAuth == constructor() ==");
        console.log("baseUrl : " + baseUrl);
        this.logins = {
            user: login,
            password: pass
        }
        this.appToken = appToken;
        this.webUrlSet(baseUrl);
        this.login(this.loginResultOk, this.loginResultError);
    }
    
    loginsGet () {
        return this.logins;
    }
    
    appTokenGet () {
        return this.appToken;
    }
    
    loginsSet (valNew) {
        this.logins = valNew;
    }
    
    appTokenSet (valNew) {
        this.appToken = valNew;
    }
    
    login (reponse, error) {
        //this.client.webTokenPrepare(appToken);
        this.client.login(reponse, error);
    }
    
    loginResultOk (datas, response) {
        console.log("== loginResultOk ==");
        console.log("datas :");
        console.dir(datas);
        //console.log("* client :");
        //console.dir(client);
        console.log("== End of loginResultOk ==");
        var args = {
            prenom: "Hervé3",
            nom: "Jacques3"
        };
        thenAuth();
        //client.Correspondants.read(118, args, clientAuth.callbackReturnTest, clientAuth.callbackErrorReturnTest);
    }
    
    loginResultError (datas, response) {
        console.log("== loginResultError ==");
        console.log("datas :");
        console.dir(datas);
        console.log("== End of loginResultError ==");
    }
}

class NodeRestClient {
    constructor (client, login, pass) {
        console.debug("== NodeRestClient == constructor() ==");
        //var THIS = this;
        
        var NodeRestClient = require("node-rest-client").Client;
        //var Client = nodeRestClient.Client;
        
        //var Client;
        //require(["node-rest-client"], function (Client) {
        //    console.log("require function");
        //    THIS.Client = module.Client
        //});
        //console.debug("typeof THIS : " + typeof THIS);
        //console.debug("typeof Client : " + typeof Client);
        //console.debug("typeof THIS.Client : " + typeof THIS.Client);
        this.client = client;
        this.nodeRestClient = new NodeRestClient();
        this.webToken = null;
        this.webTokenExpiredAt;
        this.webTokenConnectionRetry = 0;
        //this.webUrl = null;
        console.debug("== NodeRestClient == End of constructor() ==");
    }
    
    nodeRestClientGet () {
        return this.nodeRestClient;
    }
    
    webTokenGet () {
        return this.webToken;
    }
    
    webTokenExpiredAtGet () {
        return this.webTokenExpiredAt;
    }
    
    nodeRestClientSet (valNew) {
        this.nodeRestClient = valNew;
    }
    
    webTokenSet (valNew) {
        this.webToken = valNew;
    }
    
    webTokenExpiredAtSet (valNew) {
        this.webTokenExpiredAt = valNew;
    }
    
    login (success, error) {
        console.log("== login() ==");
        const THIS = this;
        var args = {
            parameters: THIS.client.loginsGet(),
            headers: {"Authorization": "Bearer " + THIS.client.appTokenGet()}
        };
        console.log("this.client.webUrlGet() (login()) : " + this.client.webUrlGet());
        console.log("appToken :");
        console.dir(THIS.client.appTokenGet());
        console.log("logins :");
        console.dir(THIS.client.logins);
        console.log("args :");
        console.dir(args);
        this.nodeRestClient.get(this.client.webUrlGet(), args, function(datas, response){
            // Si l'auth a réussi, on stocke le webToken et son url
            if (response.statusCode === 200 && typeof datas.token !== "undefined" && typeof datas.url !== "undefined") {
                THIS.webTokenConnectionRetry = 0;
                THIS.webTokenExpiredAt = datas.expiredAt;
                THIS.webToken = datas.token;
                THIS.webUrl = datas.url;
                success(datas, response);
            } 
            // Sinon on réessaye l'auth 3 fois
            else if (THIS.webTokenConnectionRetry < 3) {
                console.log("[i] retry to get webtoken...");
                THIS.webTokenConnectionRetry++;
                // On laisse 3 secondes de blanc entre chaque tentative
                setTimeout(function(){THIS.login(success, error);}, 3000);
            } else {
                error(datas, response);
            }
        });
        console.log("== End of login() ==");
    }
    
    get (params, success, error) {
        console.log("== get() ==");
        const THIS = this;
        //console.log("* THIS.webUrl : " + THIS.webUrl);
        //console.log("* THIS.webToken : " + THIS.webToken);
        //if (client.webUrlGet() !== null) {
        //    url = client.webUrlGet();
        //}
        var args = {
            parameters: params,
        };
        if (this.webToken !== null) {
            console.log("webToken !== null");
            console.log("this.webToken : " + THIS.webToken);
            args.headers = {"Authorization": "Bearer " + THIS.webToken};
        }
        console.log("this.client.webUrlGet() (get()) : " + THIS.client.webUrlGet());
        console.log("params :");
        console.dir(params);
        console.log("args :");
        console.dir(args);
        this.nodeRestClient.get(this.client.webUrlGet(), args, function(datas, response){
            if (response.statusCode === 200) {
                success(datas, response);
            } 
            // Si le webToken a expiré, on tente d'en récupérer un nouveau.
            else if (typeof datas.rhapiError !== "undefined" && datas.rhapiError === 107) {
                THIS.login(success, error);
            } else {
                error(datas, response);
            }
        });
        console.log("== End of get() ==");
    }
    
    post (params, success, error) {
        var args = {
            data: params,
            headers: {"Content-Type": "application/json"}
        }
        this.nodeRestClient.post(this.client.webUrlGet(), args, function(datas, response){
            if (response.statusCode === 200 && typeof datas.rhapiError !== "undefined" && datas.rhapiError !== 107) {
                success(datas, response);
            } else {
                error(datas, response);
            }
        });
    }
    
    put (params, success, error) {
        var args = {
            data: params,
            headers: {"Content-Type": "application/json"}
            // TODO cors ?
        }
        this.nodeRestClient.put(this.client.webUrlGet(), args, function(datas, response){
            if (response.statusCode === 200 && typeof datas.rhapiError !== "undefined" && datas.rhapiError !== 107) {
                success(datas, response);
            } else {
                error(datas, response);
            }
        });
    }
    
    destroy (success, error) {
        this.nodeRestClient.delete(this.client.webUrlGet(), {}, function(datas, response){
            if (response.statusCode === 200 && typeof datas.rhapiError !== "undefined" && datas.rhapiError !== 107) {
                success(datas, response);
            } else {
                error(datas, response);
            }
        });
    }
}

exports.Client = Client;