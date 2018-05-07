var js2xmlparser = require("js2xmlparser");

var UnsupportedResponseError = require("./unsupportedResponseError");

var ATTRIBUTES = {
    Dial: ["action", "method", "timeout", "timeLimit", "callerId", "record"],
    Say: ["voice", "language", "loop"]
};

var Response = function () {
    this.response = {};
};

Response.prototype.add = function (name, body, attributes) {
    var elem = {};
    if (body != undefined) {
        elem["#"] = body
    }
    if (attributes != undefined) {
        var attribs = {};
        if (ATTRIBUTES[name]) {
            ATTRIBUTES[name].forEach(function (att) {
                var attributeValue = attributes[att];
                if (attributeValue != undefined) {
                    attribs[att] = attributeValue;
                }
            });
        } else {
            throw new UnsupportedResponseError(name);
        }
        if (Object.keys(attribs).length > 0) {
            elem["@"] = attribs;
        }
    }
    this.response[name] = elem;
    return this;
};

Response.prototype.addDial = function (body, attributes) {
    return this.add("Dial", body, attributes);
};

Response.prototype.addSay = function (body, attributes) {
    return this.add("Say", body, attributes);
};

Response.prototype.addHangup = function () {
    return this.add("Hangup");
};


Response.prototype.toXML = function () {

    return js2xmlparser.parse("Response", this.response);
};

module.exports = Response;