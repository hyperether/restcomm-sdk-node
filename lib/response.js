var js2xmlparser = require("js2xmlparser");
var util = require('util');

var UnsupportedResponseError = require("./unsupportedResponseError");

var NESTED = {
    Response: ["Dial", "Say", "Hangup", "Number", "Redirect", "Reject", "Sms", "Email", "Fax", "Gather", "Pause",
        "Play", "Record", "UssdCollect", "UssdMessage", "Geolocation", "Video"],
    Dial: ["Client", "Conference", "Number", "Sip"],
    Client: ["Video"],
    Sip: ["Video"],
    Conference: ["Video"],
    Geolocation: ["Immediate", "Notification"]
};


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

var Element = function () {
    this.name = "";
    this.data = {};
};

Element.prototype.getName = function () {
    return this.name;
};

Element.prototype.toJSON = function () {
    return this.data;
};

Element.prototype.addElement = function(elem){
  return this.data[elem.getName()] = elem.toJSON();
};

Element.prototype.setBody = function (body) {
    if (body != undefined) {
        this.data["#"] = body;
    }
};

Element.prototype.setAttributes = function (attributes) {
    if (attributes != undefined) {
        var attribs = {};
        if (ATTRIBUTES[this.name]) {
            ATTRIBUTES[this.name].forEach(function (att) {
                var attributeValue = attributes[att];
                if (attributeValue != undefined) {
                    attribs[att] = attributeValue;
                }
            });
        }
        if (Object.keys(attribs).length > 0) {
            this.data["@"] = attribs;
        }
    }
};

Element.prototype.add = function (name, body, attributes) {
    var elem = {};
    var allowedNestedElements = NESTED[this.name] || [];
    if (allowedNestedElements.length === 0 || allowedNestedElements.indexOf(name) === -1){
        throw new UnsupportedResponseError(name);
    }
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
    this.data[name] = elem;
    return this;
};

Element.prototype.toXML = function () {
    return js2xmlparser.parse(this.name, this.data);
};

var Response = function(){
    this.name = "Response";
    this.data = {};
};
util.inherits(Response, Element);

Response.prototype.addDial = function (body, attributes) {
    var d = new Dial();
    d.setBody(body);
    d.setAttributes(attributes);
    this.addElement(d);
    return d;
};

Response.prototype.addSay = function (body, attributes) {
    return this.add("Say", body, attributes);
};

Response.prototype.addHangup = function () {
    return this.add("Hangup");
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

var Dial = function(){
    this.name = "Dial";
    this.data = {};
};
util.inherits(Dial, Element);

Dial.prototype.addNumber= function (body, attributes) {
    return this.add("Number", body, attributes);
};
Dial.prototype.addClient= function (body, attributes) {
    return this.add("Client", body, attributes);
};
Dial.prototype.addSip= function (body, attributes) {
    return this.add("Sip", body, attributes);
};

module.exports = Response;