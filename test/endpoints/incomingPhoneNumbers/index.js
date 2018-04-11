var nock = require("nock");
var should = require("should");
var testData = require('./data');

var endpointPath = "/IncomingPhoneNumbers/";

module.exports = function (client) {

    describe("IncomingPhoneNumbers", function () {

        before(function () {
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .get(endpointPath)
                .reply(200, testData.object);
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .post(endpointPath)
                .reply(200, testData.one);
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .get(endpointPath + testData.phoneNumberSid)
                .reply(200, testData.one);
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .delete(endpointPath + testData.phoneNumberSid)
                .reply(200, testData.one);
        });

        it("should return object with array of all incoming phone numbers", function (done) {
            return client.incomingPhoneNumbers.all().then(function (res) {
                res.should.eql(testData.object);
                done();
            });
        });
        it("should return one phone number", function (done) {
            return client.incomingPhoneNumbers.get(testData.phoneNumberSid).then(function (res) {
                res.should.eql(testData.one);
                done();
            });
        });
        it("should return none phone numbers for invalid phoneNumberSid", function (done) {
            return client.incomingPhoneNumbers.get(testData.invalidPhoneNumberSid).then(function (res) {
            }).catch(function (error) {
                error.statusCode.should.eql(500);
                return done();
            });
        });
        it("should add new number", function (done) {
            return client.incomingPhoneNumbers.create(testData.one).then(function (res) {
                res.should.eql(testData.one);
                done();
            });
        });
        it("should delete number", function (done) {
            return client.incomingPhoneNumbers.delete(testData.phoneNumberSid).then(function (res) {
                res.should.eql(testData.one);
                done();
            });
        });
        it("should delete none phone numbers for invalid phoneNumberSid", function (done) {
            return client.incomingPhoneNumbers.delete(testData.invalidPhoneNumberSid).then(function (res) {
            }).catch(function (error) {
                error.statusCode.should.eql(500);
                return done();
            });
        });
    });

}