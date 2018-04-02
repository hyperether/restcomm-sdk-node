
var  path = 'Clients/';

var Clients = function (client) {
  this.client = client;
};

Clients.prototype.getClients = function(){
  return this.client.makeRequest({path: path}).then(function(response){
    return Promise.resolve(response.body)
  });
};

Clients.prototype.getClient = function(sid){
  return this.client.makeRequest({path: path + sid}).then(function(response){return Promise.resolve(response.body)});
};

module.exports = Clients;