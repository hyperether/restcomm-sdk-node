var nock = require("nock");
var should = require("should");
var testData = require('./data');

var endpointPath = "/SMS/Messages/";

module.exports = function (client) {

    describe("SMS", function () {

        before(function () {
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .get(endpointPath)
                .reply(200, testData.object);
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .get(endpointPath + testData.smsMessageSid)
                .reply(200, testData.oneSuccess);
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .post(endpointPath)
                .reply(200, testData.oneSuccess);

        })
        it("should return object with array of all sms", function (done) {
            return client.sms.all().then(function (res) {
                res.should.eql(testData.object);
                done();
            });
        });
        it("should return one sms", function (done) {
            return client.sms.get(testData.smsMessageSid).then(function (res) {
                res.should.eql(testData.oneSuccess);
                done();
            });
        });
        it("should return none sms", function (done) {
            return client.sms.get(testData.invalidSmsMessageSid).then(function (res) {
            }).catch(function (error) {
                error.statusCode.should.eql(500);
                return done();
            });
        });
        it("should send message", function (done) {
            return client.sms.create(testData.oneSuccess).then(function (res) {
                res.should.eql(testData.oneSuccess);
                done();
            });
        });

        it("should not send message", function (done) {
            return client.sms.create(testData.oneError).then(function (res) {}).catch(function (error) {
                error.statusCode.should.eql(404);
                return done();

            })
        });
    })
}