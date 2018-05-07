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
            (function(){ r.add("None", "", {}) }).should.throw(UnsupportedResponseError, {message: "None response tag is not supported", name: UnsupportedResponseError});
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
    });
})();
