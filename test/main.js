var nock = require("nock");
var Client = require("../lib/client");
var UnexpectedResponseError = require("../lib/unexpectedResponseError");

var client;

describe("RestCommClient", function () {

    before(function () {
        nock.disableNetConnect();
    });

    after(function () {
        nock.enableNetConnect();
    });

    describe("testing endpoints", function () {
        var client;

        before(function () {
            client = new Client({
                accountSid: "fakeAccountSid",
                authToken: "fakeAuthToken",
                baseUrl: "https://cloud.restcomm.com/restcomm/2012-04-24/Accounts"
            });
        });

        after(function () {
            nock.cleanAll();
        });

        it("should test error response", function (done) {
            var statusCode = 400;
            var message = "Bad response";
            var response = {
                body: {message: message},
                statusCode: statusCode
            };
            (function(){ client.handleResponse(response) }).should.throw(UnexpectedResponseError, {message: message, statusCode: statusCode, name: UnexpectedResponseError});
            done();
        });

        it("should test all endpoints", function (done) {
            require("./endpoints/clients")(client);
            require("./endpoints/accounts")(client);
            require("./endpoints/availablePhoneNumbers")(client);
            require("./endpoints/incomingPhoneNumbers")(client);
            require("./endpoints/sms")(client);
            require("./endpoints/usageRecords")(client);
            require("./endpoints/calls")(client);

            done();
        });

        it("should test all responses", function (done) {
            require("./responses");

            done();
        });

    });
});
