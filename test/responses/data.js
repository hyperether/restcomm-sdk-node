var js2xmlparser = require("js2xmlparser");

var ATTRIBUTES = {
    DIAL : {
        "action" : "http://host:port/path",
        "method" : "POST",
        "timeout" : 20,
        "timeLimit" : 60,
        "callerId" : "0987654321",
        "record" : true
    },
    SAY : {
        "voice" : "woman",
        "language" : "en",
        "loop" : 1
    }
};

var BODIES = {
    DIAL : "1234567890",
    SAY : "Testing in progress"
};

exports.ATTRIBUTES = ATTRIBUTES;
exports.BODIES = BODIES;
exports.empty = js2xmlparser.parse('Response', {});
exports.hangup = js2xmlparser.parse('Response', {Hangup : {}});
exports.dial = js2xmlparser.parse('Response', {Dial : {"#": BODIES.DIAL, "@": ATTRIBUTES.DIAL}});
exports.say = js2xmlparser.parse('Response', {Say : {"#": BODIES.SAY, "@": ATTRIBUTES.SAY}});