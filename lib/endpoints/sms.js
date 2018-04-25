var UnexpectedResponseError = require("../unexpectedResponseError");

var path = 'SMS/Messages/';

var Sms = function (client) {
    this.client = client;
};

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/SMS/Messages  
Sms.prototype.all = function (accountSid) {
    return this.client.makeRequest({
        path: path,
        accountSid: accountSid
    }).then(function (response) {
        return Promise.resolve(response.body)
    }).catch(function () {
        return Promise.resolve()
    });
};
//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/SMS/Messages/{SMSMessageSid}  
Sms.prototype.get = function (smsMessageSid) {
    if (!smsMessageSid) {
        return Promise.reject(new UnexpectedResponseError('INVALID_SID', 500));
    }
    return this.client.makeRequest({
        path: path+smsMessageSid
    }).then(function (response) {
        return Promise.resolve(response.body)
    }).catch(function () {
        return Promise.resolve()
    });
};
//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/SMS/Messages  
Sms.prototype.create = function (data) {
    if (!data.From || !data.To || !data.Body) {
        return Promise.reject(new UnexpectedResponseError('Bad request', 404));
    }
    return this.client.makeRequest({
        method: 'POST',
        path: path,
        body: data
    }).then(function (response) {
        return Promise.resolve(response.body)
    }).catch(function () {
        return Promise.resolve()
    });
};
module.exports = Sms;