var js2xmlparser = require("js2xmlparser");

var UnsupportedResponseError = require("./unsupportedResponseError");

var ATTRIBUTES = {
    Dial: ["action", "method", "timeout", "timeLimit", "callerId", "record"],
    Say: ["voice", "language", "loop"],
    Number: ["sendDigits","url","method","statusCallbackEvent", "statusCallback", "statusCallbackMethod"],
    Client: ["name","url","method","statusCallbackEvent", "statusCallback", "statusCallbackMethod"],
    Sip: ["name","url","method","statusCallbackEvent", "statusCallback", "statusCallbackMethod"],
    Redirect:["method"],
    Reject:["reason"],
    Sms: ["to","from","action","method", "statusCallback"]
    

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

Response.prototype.addNumber= function (body, attributes) {
    return this.add("Number", body, attributes);
};
Response.prototype.addClient= function (body, attributes) {
    return this.add("Client", body, attributes);
};
Response.prototype.addSip= function (body, attributes) {
    return this.add("Sip", body, attributes);
};
Response.prototype.addRedirect= function (body, attributes) {
    return this.add("Redirect", body, attributes);
};
Response.prototype.addSms= function (body, attributes) {
    return this.add("Sms", body, attributes);
};
Response.prototype.addReject= function (attributes) {
    return this.add("Reject", undefined ,attributes);
};
Response.prototype.toXML = function () {
    return js2xmlparser.parse("Response", this.response);
};

module.exports = Response;