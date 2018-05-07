/**
 * Created by laslo on 7.5.18..
 */


var Response = require("../../lib/response");
var testData = require("./data");
var UnsupportedResponseError = require("../../lib/unsupportedResponseError");


module.exports = (function () {

    describe("Responses", function () {

        it("should throw unsupported tag exception", function (done) {
            var r = new Response();
            (function () {
                r.add("None", "", {})
            }).should.throw(UnsupportedResponseError, {
                message: "None Nested element is not supported",
                name: UnsupportedResponseError
            });
            done();
        });
        it("should return empty response", function (done) {
            var r = new Response();
            r.toXML().should.equal(testData.empty);
            done();
        });
        it("should return hangup response", function (done) {
            var r = new Response();
            r.addHangup();
            r.toXML().should.equal(testData.hangup);
            done();
        });
        it("should return dial response", function (done) {
            var r = new Response();
            r.addDial(testData.BODIES.DIAL, testData.ATTRIBUTES.DIAL);
            r.toXML().should.equal(testData.dial);
            done();
        });
        it("should return say response", function (done) {
            var r = new Response();
            r.addSay(testData.BODIES.SAY, testData.ATTRIBUTES.SAY);
            r.toXML().should.equal(testData.say);
            done();
        });
        it("should return number response", function (done) {
            var r = new Response();
            var d = r.addDial();
            d.addNumber(testData.BODIES.NUMBER, testData.ATTRIBUTES.NUMBER);
            r.toXML().should.equal(testData.number);
            done();
        });
        it("should return client response", function (done) {
            var r = new Response();
            var d = r.addDial();
            d.addClient(testData.BODIES.CLIENT, testData.ATTRIBUTES.CLIENT);
            r.toXML().should.equal(testData.client);
            done();
        });
        it("should return sip response", function (done) {
            var r = new Response();
            var d = r.addDial();
            d.addSip(testData.BODIES.SIP, testData.ATTRIBUTES.SIP);
            r.toXML().should.equal(testData.sip);
            done();
        });
        it("should return redirect response", function (done) {
            var r = new Response();
            r.addRedirect(testData.BODIES.REDIRECT, testData.ATTRIBUTES.REDIRECT);
            r.toXML().should.equal(testData.redirect);
            done();
        });
        it("should return sms response", function (done) {
            var r = new Response();
            r.addSms(testData.BODIES.SMS, testData.ATTRIBUTES.SMS);
            r.toXML().should.equal(testData.sms);
            done();
        });
        it("should return reject response", function (done) {
            var r = new Response();
            r.addReject(testData.ATTRIBUTES.REJECT);
            r.toXML().should.equal(testData.reject);
            done();
        });
        it("should return pause response", function (done) {
            var r = new Response();
            r.addPause(testData.ATTRIBUTES.PAUSE);
            r.toXML().should.equal(testData.pause);
            done();
        });
    });
})();