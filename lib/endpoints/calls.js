var UnexpectedResponseError = require("../unexpectedResponseError");

var path = 'Calls/';

var Calls = function (client) {
    this.client = client;
};

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/Calls  
Calls.prototype.all = function (accountSid) {
    return this.client.makeRequest({
        path: path,
        accountSid: accountSid
    }).then(function (response) {
        return Promise.resolve(response.body)
    });
};

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/Calls/{CallSid}  
Calls.prototype.get = function (callSid) {
    if (!callSid) {
        return Promise.reject(new UnexpectedResponseError('INVALID_SID', 500));
    }
    return this.client.makeRequest({
            path: path + callSid
        }).then(function (response) {
            return Promise.resolve(response.body)
        })
        .catch(function () {
            return Promise.resolve()
        });
};

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/Calls  
Calls.prototype.create = function (data) {
    if (!data.From || !data.To || !data.Url) {
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
//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/Calls.json/{CallSid}
Calls.prototype.update = function (data) {
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

module.exports = Calls;