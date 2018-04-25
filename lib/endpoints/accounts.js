var UnexpectedResponseError = require("../unexpectedResponseError");

var Accounts = function (client) {
  this.client = client;
};

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts
Accounts.prototype.all = function () {
  return this.client.makeRequest({
    accountSid: ''
  }).then(function (response) {
    return Promise.resolve(response.body)
  });
};

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts
Accounts.prototype.create = function (data) {
  if (!data.Role || !data.Password || !data.EmailAddress) {
    return Promise.reject(new UnexpectedResponseError('Bad request', 404));
  }
  return this.client.makeRequest({
    method: 'POST',
    accountSid: '',
    body: data
  }).then(function (response) {
    return Promise.resolve(response.body)
  });
};

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{accountSid} or {EmailAddress}
Accounts.prototype.get = function (data) {
  if (!data) {
    return Promise.reject(new UnexpectedResponseError('Bad request', 404));
  };
  var accountIdentificator;
  if (data.Sid) {
    if (!data.Sid) {
      return Promise.reject(new UnexpectedResponseError('INVALID_SID', 500));
    };
    accountIdentificator = data.Sid;
    delete data.Sid;
  } else {
    if (!data.EmailAddress) {
      return Promise.reject(new UnexpectedResponseError('INVALID_EMAIL', 500));
    };
    accountIdentificator = data.EmailAddress;
    delete data.EmailAddress;
  }
  return this.client.makeRequest({
    accountSid: accountIdentificator
  }).then(function (response) {
    return Promise.resolve(response.body)
  }).catch(function () {
    return Promise.resolve()
  });
};


//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{accountSid} or {EmailAddress}
//Update and close account
Accounts.prototype.update = function (data) {
  if (!data) {
    return Promise.reject(new UnexpectedResponseError('Bad Request', 404));
  };
  var accountIdentificator;
  if (data.Sid) {
    if (!data.Sid) {
      return Promise.reject(new UnexpectedResponseError('INVALID_SID', 500));
    };
    accountIdentificator = data.Sid;
    delete data.Sid;
  } else {
    if (!data.EmailAddress) {
      return Promise.reject(new UnexpectedResponseError('INVALID_EMAIL', 500));
    };
    accountIdentificator = data.EmailAddress;
    delete data.EmailAddress;
  }
  return this.client.makeRequest({
    method: 'PUT',
    accountSid: accountIdentificator,
    body: data
  }).then(function (response) {
    return Promise.resolve(response.body)
  });
};

module.exports = Accounts;