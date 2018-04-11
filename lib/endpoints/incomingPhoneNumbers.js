var UnexpectedResponseError = require("../unexpectedResponseError");

var path = 'IncomingPhoneNumbers/';

var IncomingPhoneNumbers = function (client) {
  this.client = client;
};
//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/IncomingPhoneNumbers  
IncomingPhoneNumbers.prototype.all = function () {
  return this.client.makeRequest({ path: path }).then(function (response) {
    return Promise.resolve(response.body)
  }).catch(function () { return Promise.resolve() });
};
//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/IncomingPhoneNumbers/{IncomingPhoneNumberSid}
IncomingPhoneNumbers.prototype.get = function (phoneNumberSid) {
  if (!phoneNumberSid) {
    return Promise.reject(new UnexpectedResponseError('INVALID_SID', 500));
  }
  return this.client.makeRequest({ path: path + phoneNumberSid }).then(function (response) {
    return Promise.resolve(response.body)
  }).catch(function () { return Promise.resolve() });
};

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/IncomingPhoneNumbers    
IncomingPhoneNumbers.prototype.create = function (data) {
  if (!data) {
    return Promise.reject(new UnexpectedResponseError('Bad request', 404));
  }
  return this.client.makeRequest({
    method: 'POST',
    path: path,
    body: JSON.stringify(data)
  }).then(function (response) {
    return Promise.resolve(response.body)
  }).catch(function () { return Promise.resolve() });
};

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/IncomingPhoneNumbers/{IncomingPhoneNumberSid}
IncomingPhoneNumbers.prototype.delete = function (phoneNumberSid) {
  if (!phoneNumberSid) {
    return Promise.reject(new UnexpectedResponseError('INVALID_SID', 500));
  }
  return this.client.makeRequest({ method: 'DELETE', path: path + phoneNumberSid }).then(function (response) {
    return Promise.resolve(response.body)
  }).catch(function () { return Promise.resolve() });
};

module.exports = IncomingPhoneNumbers;