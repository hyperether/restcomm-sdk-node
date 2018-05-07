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
                .reply(200, testData.response);
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .get(endpointPath + testData.callSid)
                .reply(200, testData.response);
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .post(endpointPath + testData.callSid)
                .reply(200, testData.response);

        });
        it("should return all calls", function (done) {
            return client.calls.all().then(function (res) {
                res.should.eql(testData.object);
                done();
            });
        });
        it("should create call", function (done) {
            return client.calls.create(testData.oneSuccess).then(function (res) {
                res.should.eql(testData.response);
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
                res.should.eql(testData.response);
                done();
            });
        });

        it("should return none call", function (done) {
            return client.calls.get(testData.invalidCallSid).then(function (res) {}).catch(function (error) {
                error.statusCode.should.eql(500);
                return done();
            });
        });
        it("should redirected call to the Url specified", function (done) {
            return client.calls.update({
                Url: "http://127.0.0.1:8080/restcomm/demos/hello-play.xml"
            }).then(function (res) {
                res.should.eql(testData.response);
                return done();
            })
        });
        it("should end call in progress", function (done) {
            return client.calls.update({ Status:"completed"}).then(function (res) {
                res.should.eql(testData.response);
                return done();
            });
        });



    });

}