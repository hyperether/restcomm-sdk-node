var nock = require("nock"),
    should = require("should");

var testData = require('./data');
var endpointPath = "/Calls/";

module.exports = function (client) {

    describe("Calls", function () {

        before(function () {
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .get(endpointPath)
                .reply(200, testData.object);
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .post(endpointPath)
                .reply(200, testData.oneSuccess);
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .get(endpointPath + testData.callSid)
                .reply(200, testData.oneSuccess);

        });
        it("should return all calls", function (done) {
            return client.calls.all().then(function (res) {
                res.should.eql(testData.object);
                done();
            });
        });
        it("should create call", function (done) {
            return client.calls.create(testData.oneCreate).then(function (res) {
                res.should.eql(testData.oneSuccess);
                done();
            });
        });
        it("should create none call", function (done) {
            return client.calls.create(testData.oneError).then(function (res) {}).catch(function (error) {
                error.statusCode.should.eql(404);
                return done();
            });
        });
        it("should return one call", function (done) {
            return client.calls.get(testData.callSid).then(function (res) {
                res.should.eql(testData.oneSuccess);
                done();
            });
        });

        it("should return none call", function (done) {
            return client.calls.get(testData.invalidCallSid).then(function (res) {}).catch(function (error) {
                error.statusCode.should.eql(500);
                return done();
            });
        });



    });

}