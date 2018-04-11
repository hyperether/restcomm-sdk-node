var UnexpectedResponseError = require("../unexpectedResponseError");

var path = 'Usage/Records/';

var UsageRecords = function (client) {
    this.client = client;
};

//https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/Usage/Records/{Subresource}

UsageRecords.prototype.get = function (subresource) {
    if (!subresource) {
        return Promise.reject(new UnexpectedResponseError('Not Found', 400));
    }
    return this.client.makeRequest({
        path: path + subresource
    }).then(function (response) {
        return Promise.resolve(response.body)
    }).catch(function () {
        return Promise.resolve()
    });
}

module.exports = UsageRecords;