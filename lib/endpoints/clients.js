var path = 'Clients/';

var Clients = function (client) {
  this.client = client;
};
//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/Clients  
Clients.prototype.all = function (accountSid) {
  return this.client.makeRequest({
    path: path,
    accountSid: accountSid
  }).then(function (response) {
    return Promise.resolve(response.body)
  });
};

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/Clients/{ClientSid} 
Clients.prototype.get = function (clientSid) {
  return this.client.makeRequest({
      path: path + clientSid
    }).then(function (response) {
      return Promise.resolve(response.body)
    })
    .catch(function () {
      return Promise.resolve();
    });
}

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/Clients  
Clients.prototype.create = function (data) {
  return this.client.makeRequest({
    method: 'POST',
    path: path,
    body: data
  }).then(function (response) {
    return Promise.resolve(response.body)
  });
};
//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/Clients/{ClientSid} 
Clients.prototype.update = function (clientSid, data) {
  return this.client.makeRequest({
    method: 'PUT',
    path: path + clientSid,
    body: data
  }).then(function (response) {
    return Promise.resolve(response.body)
  });
};

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/Clients/{ClientSid} 
Clients.prototype.delete = function (clientSid) {
  return this.client.makeRequest({
    method: 'DELETE',
    path: path + clientSid
  }).then(function (response) {
    return Promise.resolve(response.body)
  });
};

module.exports = Clients;