
var Accounts = function (client) {
  this.client = client;
};

Accounts.prototype.get = function(sid){
  return this.client.makeRequest({accountSid : sid}).then(function(response){
    return Promise.resolve(response.body)
  }).catch(function(){return Promise.resolve()});
};

Accounts.prototype.all = function(){
  return this.client.makeRequest({accountSid : ''}).then(function(response){return Promise.resolve(response.body)});
};
Accounts.prototype.update = function(data){
  var accountIdentificator;
  if (data.Sid) {
    accountIdentificator = data.Sid;
    delete data.Sid;
  }else {
    accountIdentificator = data.EmailAddress;
    delete data.EmailAddress;
  }
  return this.client.makeRequest({method: 'PUT', accountSid : accountIdentificator, body: JSON.stringify(data)}).then(function(response){return Promise.resolve(response.body)});
};

module.exports = Accounts;