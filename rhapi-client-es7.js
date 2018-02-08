
class Client {

    constructor (baseUrl, errorHandle) {
        
        if (typeof baseUrl === "function" && typeof errorHandle === "undefined" ) {
            globalErrorHandle = baseUrl;
        }
        else {
            if (typeof baseUrl === "string" && baseUrl !== "") {
                this.baseUrl = baseUrl;
                this.client = new NodeRestClient();
            }
            
            if (typeof errorHandle === "function") {
                globalErrorHandle = errorHandle;
            }
        }
        
        this.forms = [];
        
        var self = this;
        
        this.Administration = {
            read : function (search, success, error) {
                var url = self.baseUrl + "/Administration/" + search;
                self.get(url, {}, success, error);
            }
        };
        
        this.Configuration = {
            read : function (search, success, error) {
                var url = self.baseUrl + "/Configuration/" + search;
                self.get(url, {}, success, error);
            },
            
            update : function (search, params, success, error) {
                var url = self.baseUrl + "/Configuration/" + search;
                self.put(url, params, success, error);
            },
            
            destroy : function (search, success, error) {
                var url = self.baseUrl + "/Configuration/" + search;
                self.destroy(url, success, error);
            }
        };
        
        this.CCAM = {
            read : function (search, params, success, error) {
                var url = self.baseUrl + "/CCAM/" + search;
                self.get(url, params, success, error);
            },
            
            readAll : function (params, success, error) {
                var url = self.baseUrl + "/CCAM";
                self.get(url, params, success, error);
            },
            
            contextes : function (success, error) {
                var url = self.baseUrl + "/CCAM/contextes";
                self.get(url, {}, success, error);
            },
            
            menu : function (search, success, error) {
                var url = self.baseUrl + "/CCAM/menu/" + search;
                self.get(url, {}, success, error);
            },
            
            tarif : function (search, params, success, error) {
                var url = self.baseUrl + "/CCAM/" + search + "/tarif";
                self.get(url, params, success, error);
            }
        };
        
        this.Correspondants = {
            create : function (params, success, error) {
                self.post(self.baseUrl + "/Correspondants", params, success, error);
            },
            
            read : function (search, params, success, error) {
                var url = self.baseUrl + "/Correspondants/" + search;
                self.get(url, params, success, error);
            },
            
            readAll : function (params, success, error) {
                var url = self.baseUrl + "/Correspondants";
                self.get(url, params, success, error);
            },
            
            update : function (search, params, success, error) {
                var url = self.baseUrl + "/Correspondants/" + search;
                self.put(url, params, success, error);
            },
            
            destroy : function (search, success, error) {
                var url = self.baseUrl + "/Correspondants/" + search;
                self.destroy(url, success, error);
            },
            
            completion : function (params, success, error) {
                var url = self.baseUrl + "/Correspondants/completion";
                self.get(url, params, success, error);
            }
        };
        
        this.Images = {
            create : function (params, success, error) {
                self.post(self.baseUrl + "/Images", params, success, error);
            },
            
            read : function (search, params, success, error) {
                var url = self.baseUrl + "/Images/" + search;
                self.get(url, params, success, error);
            },
            
            readAll : function (params, success, error) {
                var url = self.baseUrl + "/Images";
                self.get(url, params, success, error);
            },
            
            update : function (search, params, success, error) {
                var url = self.baseUrl + "/Images/" + search;
                self.put(url, params, success, error);
            },
            
            destroy : function (search, success, error) {
                var url = self.baseUrl + "/Images/" + search;
                self.destroy(url, success, error);
            },
            
            dupliquer : function (search, success, error) {
                var url = self.baseUrl + "/Images/" + search + "/dupliquer";
                self.post(url, {}, success, error);
            }
        };
        
        this.MonCompte = {
            read : function (success, error) {
                self.get(self.baseUrl + "/MonCompte", success, error);
            },
            
            update : function (params, success, error) {
                self.put(self.baseUrl + "/MonCompte", params, success, error);
            }
        }
        
        this.Patients = {
            create : function (params, success, error) {
                self.post(self.baseUrl + "/Patients", params, success, error);
            },
            
            read : function (search, params, success, error) {
                var url = self.baseUrl + "/Patients/" + search;
                self.get(url, params, success, error);
            },
            
            readAll : function (params, success, error) {
                var url = self.baseUrl + "/Patients";
                self.get(url, params, success, error);
            },
            
            update : function (search, params, success, error) {
                var url = self.baseUrl + "/Patients/" + search;
                self.put(url, params, success, error);
            },
            
            destroy : function (search, success, error) {
                var url = self.baseUrl + "/Patients/" + search;
                self.destroy(url, success, error);
            },
            
            age : function (search, params, success, error) {
                var url = self.baseUrl + "/Patients/" + search + "/age";
                self.get(url, params, success, error);
            },
            
            completion : function (params, success, error) {
                var url = self.baseUrl + "/Patients/completion";
                self.get(url, params, success, error);
            }
        };

        this.Plannings = {
            create : function (params, success, error) {
                self.post(self.baseUrl + "/Plannings", params, success, error);
            },
            
            read : function (search, params, success, error) {
                var url = self.baseUrl + "/Plannings/" + search;
                self.get(url, params, success, error);
            },
            
            readAll : function (params, success, error) {
                var url = self.baseUrl + "/Plannings";
                self.get(url, params, success, error);
            },
            
            mesPlannings : function (params, success, error) {
                var url = self.baseUrl + "/Plannings/mesPlannings";
                self.get(url, params, success, error);
            },
            
            update : function (search, params, success, error) {
                var url = self.baseUrl + "/Plannings/" + search;
                self.put(url, params, success, error);
            },
            
            destroy : function (search, success, error) {
                var url = self.baseUrl + "/Plannings/" + search;
                self.destroy(url, success, error);
            },
            
            actualiser : function (search, params, success, error) {
                var url = self.baseUrl + "/Plannings/" + search + "/actualiser";
                self.get(url, params, success, error);
            }
        };
        
        this.RendezVous = {
            create : function (params, success, error) {
                self.post(self.baseUrl + "/RendezVous", params, success, error);
            },
            
            read : function (search, params, success, error) {
                var url = self.baseUrl + "/RendezVous/" + search;
                self.get(url, params, success, error);
            },
            
            readAll : function (params, success, error) {
                var url = self.baseUrl + "/RendezVous";
                self.get(url, params, success, error);
            },
            
            update : function (search, params, success, error) {
                var url = self.baseUrl + "/RendezVous/" + search;
                self.put(url, params, success, error);
            },
            
            destroy : function (search, success, error) {
                var url = self.baseUrl + "/RendezVous/" + search;
                self.destroy(url, success, error);
            },
            
            actualiser : function (params, success, error) {
                var url = self.baseUrl + "/RendezVous/actualiser";
                self.get(url, params, success, error);
            }
        };
        
        this.Reservation = {
            create : function (params, success, error) {
                self.post(self.baseUrl + "/Reservation", params, success, error);
            },
            
            read : function (search, params, success, error) {
                var url = self.baseUrl + "/Reservation/" + search;
                self.get(url, params, success, error);
            },
            
            readAll : function (params, success, error) {
                var url = self.baseUrl + "/Reservation";
                self.get(url, params, success, error);
            },
            
            update : function (search, params, success, error) {
                var url = self.baseUrl + "/Reservation/" + search;
                self.put(url, params, success, error);
            },
            
            annuler : function (search, params, success, error) {
                var url = self.baseUrl + "/Reservation/" + search + "/annuler";
                self.put(url, params, success, error);
            },
            
            mesRendezVous : function (params, success, error) {
                var url = self.baseUrl + "/Reservation/mesRendezVous";
                self.get(url, params, success, error);
            },
            
            mesPlannings : function (params, success, error) {
                var url = self.baseUrl + "/Reservation/mesPlannings";
                self.get(url, params, success, error);
            }
            
        };

    } // constructor ends
    
    authorize (authUrl, appToken, user, password, success, error) {
        this.auth = new Auth(authUrl, appToken, user, password);
        this.authRenew(success, error);
    }
    
    authRenew(success, error) {
        var self = this;
        this.auth.renew(
            function(url, token, expiredIn) {
                if (url !== self.baseUrl) {
                    self.baseUrl = url;
                    self.updateForms();
                }
                self.client = new NodeRestClient(token);
                setTimeout(
                    function() {
                        self.authRenew(function(){}, error);
                    }
                    , Math.round(expiredIn * 0.9) // - 10%
                );
                success();
            },
            function (datas, response) {
                error(datas, response);
            }
        );
    }
    
    addForm(form, group) {
        form.setAttribute("action", this.baseUrl + "/" + group);
        // pour màj dynamique avec nouveaux token/url => voir updateForms()
        form.setAttribute("rhapi-group", group);
        form.setAttribute("method", "post");
        form.setAttribute("enctype", "multipart/form-data");
        // Images -> image / Documents -> document
        var name = group.toLowerCase().slice(0, -1);
        var inputs = form.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) { 
            var input = inputs[i];
            if (input.getAttribute("type") === "file") {
                input.setAttribute("name", name);
            }
        }
        this.forms.push(form);
    }
    
    updateForms() {
        var forms2 = [];
        for (var i = 0; i < this.forms.length; i++) {
            var form = this.forms[i];
            if (document.body.contains(form)) {
                form.setAttribute(
                    "action", 
                    this.baseUrl + "/" + form.getAttribute("rhapi-group")
                );
                forms2.push(form);
            }
        }
        this.forms = forms2;
    }
        
    get (url, params, success, error) {
        this.client.get(url, params, success, error);
    }
    
    post (url, params, success, error) {
        this.client.post(url, params, success, error);
    }
    
    put (url, params, success, error) {
        this.client.put(url, params, success, error);
    }
    
    destroy (url, success, error) {
        this.client.destroy(url, success, error);
    }
}

class NodeRestClient {
    
    constructor (token) {
        var Client = require("node-rest-client").Client;
        this.client = new Client();
        this.headers = {};
        if (typeof token === "string" && token !== "") {
            this.headers = {
                "Authorization": "Bearer " + token
            }
        }
    }
    
    get (url, params, success, error) {
        var args = {
            parameters: params,
            headers: this.headers
        };
        var req = this.client.get(url, args, function(datas, response) {
            if (response.statusCode === 200) {
                success(datas, response);
            } 
            else if (response.statusCode >= 400) {
                errorHandle(datas, response, error);
            }
        });
        req.on('error', netErrorHandle.bind(this, error));
    }
    
    post (url, params, success, error) {
        var headers = Object.assign({"Content-Type": "application/json"}, this.headers);
        var args = {
            data: params,
            headers: headers
        };
        var req = this.client.post(url, args, function(datas, response) {
            if (response.statusCode === 200) {
                success(datas, response);
            } 
            else if (response.statusCode >= 400) {
                errorHandle(datas, response, error);
            }
        });
        req.on('error', netErrorHandle.bind(this, error));
    }
    
    put (url, params, success, error) {
        var headers = Object.assign({"Content-Type": "application/json"}, this.headers);
        var args = {
            data: params,
            headers: headers
        };
        var args = {
            data: params,
            headers: headers
        };
        var req = this.client.put(url, args, function(datas, response) {
            if (response.statusCode === 200) {
                success(datas, response);
            } 
            else if (response.statusCode >= 400) {
                errorHandle(datas, response, error);
            }
        });
        req.on('error', netErrorHandle.bind(this, error));
    }
    
    destroy (url, success, error) {
        var args = {
            headers: this.headers
        };
        var req = this.client.delete(url, args, function(datas, response) {
            if (response.statusCode === 200) {
                success(datas, response);
            } 
            else if (response.statusCode >= 400) {
                errorHandle(datas, response, error);
            }
        });
        req.on('error', netErrorHandle.bind(this, error));
    }
}

class Auth {
    
    constructor (authUrl, appToken, user, password) {
        var Client = require("node-rest-client").Client;
        this.client = new Client();
        this.args = {
            headers: {
                "Authorization": "Bearer " + appToken
            },
            parameters: {
                user: user,
                password: password
            }
        };
        this.authUrl = authUrl;
    }
    
    renew (success, error) {
        var req = this.client.get(this.authUrl, this.args, function(datas, response) {
            if (response.statusCode === 200) {
                success(datas.url, datas.token, datas.expiredIn);
            } 
            else if (response.statusCode >= 400) {
                errorHandle(datas, response, error);
            }
        });
        req.on('error', netErrorHandle.bind(this, error));
    }
}

function errorHandle (datas, response, error) {

    if (typeof error === "function") {
        error(datas, response);
    }
    
    if (globalErrorHandle) {
        globalErrorHandle(datas, response);
    }  
}

// Network error handler
function netErrorHandle (error) {

    // 000 is a common code to use when no HTTP code was received due to a network error
    errorHandle(
        { 
            networkError: 0,
            internalMessage: "Erreur réseau",
            userMessage: "Erreur réseau"
        },
        {
            statusCode: 0
        },
        error
    );
}

// Default global error handler
var globalErrorHandle = 0;

exports.Client = Client;
