class Client {
    constructor (baseUrl) {
        var THIS = this;
        this.baseUrl = baseUrl;
        this.Administration = {
            read : function (params, callback) {
                var url = THIS.baseUrl + "/Administration" + THIS.getPrepare(THIS, "Administration", "read", params);
                console.log("url (before get()) : " + url);
                console.log("THIS.isString(params) : " + THIS.isString(params));
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            }
        }
        
        this.CCAM = {
            read : function (params, callback) {
                var url = THIS.baseUrl + "/CCAM" + THIS.getPrepare(THIS, "CCAM", "read", params);
                console.log("url (before get()) : " + url);
                console.log("THIS.encodeQueryData(params) : " + THIS.encodeQueryData(params));
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            readAll : function (params, callback) {
                console.log("-- CCAM readAll --");
                var url = THIS.baseUrl + "/CCAM" + THIS.getPrepare(THIS, "CCAM", "readAll", params);
                console.log("url (before get()) : " + url);
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            contextes : function (params, callback) {
                var url = THIS.baseUrl + "/CCAM/contextes";
                console.log("url (before get()) : " + url);
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            tarif : function (params, callback) {
                var url = THIS.baseUrl + "/CCAM" + THIS.getPrepare(THIS, "CCAM", "tarif", params);
                console.log("url (before get()) : " + url);
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            }
        }
        
        this.Correspondants = {
            create : function (params, callback) {
                //params.Content-Type = "application/json";
                //params.contentType = "application/json";
                //params.header = "Content-Type: application/json";
                THIS.post(THIS.baseUrl + "/Correspondants", params, callback);
            },
            
            read : function (params, callback) {
                var url = THIS.baseUrl + "/Correspondants" + THIS.getPrepare(THIS, "Correspondants", "read", params);
                console.log("url (before get()) : " + url);
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            readAll : function (params, callback) {
                var url = THIS.baseUrl + "/Correspondants" + THIS.getPrepare(THIS, "Correspondants", "readAll", params);
                console.log("url (before get()) : " + url);
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            update : function (params, callback) {
                var url = THIS.baseUrl + "/Correspondants" + THIS.getPrepare(THIS, "Correspondants", "update", params);
                console.log("url (before get()) : " + url);
                THIS.put(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            destroy : function (params, callback) {
                var url = THIS.baseUrl + "/Correspondants" + THIS.getPrepare(THIS, "Correspondants", "destroy", params);
                console.log("url (before get()) : " + url);
                THIS.delete(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            completion : function (params, callback) {
                var url = THIS.baseUrl + "/Correspondants" + THIS.getPrepare(THIS, "Correspondants", "completion", params);
                console.log("url (before get()) : " + url);
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            }
        }
        
        this.Images = {
            create : function (params, callback) {
                THIS.post(THIS.baseUrl + "/Images", params, callback);
            },
            
            read : function (params, callback) {
                var url = THIS.baseUrl + "/Images" + THIS.getPrepare(THIS, "Images", "read", params);
                console.log("url (before get()) : " + url);
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            readAll : function (params, callback) {
                var url = THIS.baseUrl + "/Images" + THIS.getPrepare(THIS, "Images", "readAll", params);
                console.log("url (before get()) : " + url);
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            update : function (params, callback) {
                var url = THIS.baseUrl + "/Images" + THIS.getPrepare(THIS, "Images", "update", params);
                console.log("url (before get()) : " + url);
                THIS.put(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            destroy : function (params, callback) {
                var url = THIS.baseUrl + "/Images" + THIS.getPrepare(THIS, "Images", "destroy", params);
                console.log("url (before get()) : " + url);
                THIS.delete(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            dupliquer : function (params, callback) {
                var url = THIS.baseUrl + "/Images" + THIS.getPrepare(THIS, "Images", "dupliquer", params);
                console.log("url (before get()) : " + url);
                THIS.post(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            }
        }
        
        this.MonCompte = {
            read : function (params, callback) {
                THIS.get(THIS.baseUrl + "/MonCompte", params, callback);
            },
            
            update : function (params, callback) {
                THIS.put(THIS.baseUrl + "/MonCompte", params, callback);
            }
        }
        
        this.Patients = {
            create : function (params, callback) {
                THIS.post(THIS.baseUrl + "/Patients", params, callback);
            },
            
            read : function (params, callback) {
                var url = THIS.baseUrl + "/Patients" + THIS.getPrepare(THIS, "Patients", "read", params);
                console.log("url (before get()) : " + url);
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            readAll : function (params, callback) {
                var url = THIS.baseUrl + "/Patients" + THIS.getPrepare(THIS, "Patients", "readAll", params);
                console.log("url (before get()) : " + url);
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            update : function (params, callback) {
                var url = THIS.baseUrl + "/Patients" + THIS.getPrepare(THIS, "Patients", "update", params);
                console.log("url (before get()) : " + url);
                THIS.put(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            destroy : function (params, callback) {
                var url = THIS.baseUrl + "/Patients" + THIS.getPrepare(THIS, "Patients", "destroy", params);
                console.log("url (before get()) : " + url);
                THIS.delete(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            age : function (params, callback) {
                var url = THIS.baseUrl + "/Patients" + THIS.getPrepare(THIS, "Patients", "age", params);
                console.log("url (before get()) : " + url);
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
            },
            
            completion : function (params, callback) {
                var url = THIS.baseUrl + "/Patients" + THIS.getPrepare(THIS, "Patients", "completion", params);
                console.log("url (before get()) : " + url);
                THIS.get(url, (THIS.isString(params) || !isNaN(params))?{}:params, callback);
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
    
    encodeQueryData(data) {
        let ret = [];
        for (let d in data)
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        return ret.join('&');
    }
    
    getPrepare(THIS, group, method, params) {
        console.log("============");
        console.log("====== getPrepare ======");
        console.log("============");
        console.log("group : " + group);
        console.log("method : " + method);
        var url = "";
        if (typeof params != "undefined") {
            if (isNaN(params) && !THIS.isString(params)) {
                console.log("params :");
                console.dir(params);
                
                if (group != "CCAM") {
                    // Groupes "Correspondants", "Patients", "Images".
                    if (typeof params.id != "undefined")
                        url += "/" + encodeURIComponent(params.id);
                    else if (method == "completion")
                        url += "/completion"
                    
                    if (method == "age")
                        url += "/age";
                    if (method != "dupliquer")
                        url += "?" + THIS.encodeQueryData(params);
                }
                
                if (group == "CCAM") {
                    var code = "";
                    if (typeof params.code != "undefined") {
                        code = encodeURIComponent(params.code);
                    }
                    
                    if (method == "readAll")
                        url += "?" + THIS.encodeQueryData(params);
                    else if (method != "contextes")
                        url += "/" + code;
                    
                    switch (method) {
                    case ("tarif") :
                        url += "/tarif?" + THIS.encodeQueryData(params);
                        break;
                    }
                    
                } else if (group == "Images" && method == "dupliquer") {
                    url += "/dupliquer";
                }
            } else {
                if (group == "Administration" || group != "Administration" && !isNaN(params))
                    url += "/" + encodeURIComponent(params);
                if (method == "age")
                    url += "/age";
                else if (group == "Images" && method == "dupliquer")
                    url += "/dupliquer";
            }
        }
        console.log("url : " + url);
        console.log("============");
        console.log("====== End of getPrepare2 ======");
        console.log("============");
        return url;
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
    
    isString (obj) {
        return (Object.prototype.toString.call(obj) === '[object String]');
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