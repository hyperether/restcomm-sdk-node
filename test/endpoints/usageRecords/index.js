var nock = require("nock");
var should = require("should");
var testData = require('./data');

var endpointPath = "/Usage/Records/";

module.exports = function (client) {

    describe("UsageRecords", function () {

        before(function () {
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .get(endpointPath + testData.subresourceDaily)
                .reply(200, testData.array);
            nock(client.baseUrl + "/fakeAccountSid")
                .persist()
                .get(endpointPath + testData.subresourceMonthly)
                .reply(200, testData.array);

        })

        it("should return usage records list resource daily", function (done) {
            return client.usageRecords.get(testData.subresourceDaily).then(function (res) {
                res.should.eql(testData.array);
                done();
            });
        });
        it("should return usage records list resource monthly", function (done) {
            return client.usageRecords.get(testData.subresourceMonthly).then(function (res) {
                res.should.eql(testData.array);
                done();
            });
        });
        it("should return none usage records list resource monthly", function (done) {
            return client.usageRecords.get(testData.invalidSubresource).then(function (res) {
            }).catch(function (error) {
                error.statusCode.should.eql(400);
                return done();
            });
        });
    })
}