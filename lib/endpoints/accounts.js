
var Accounts = function (client) {
  this.client = client;
};

Accounts.prototype.getMainAccount = function(){
  return this.client.makeRequest({}).then(function(response){
    return Promise.resolve(response.body)
  });
};

Accounts.prototype.getSubAccounts = function(){
  return this.client.makeRequest({accountSid : ''}).then(function(response){return Promise.resolve(response.body)});
};

module.exports = Accounts;