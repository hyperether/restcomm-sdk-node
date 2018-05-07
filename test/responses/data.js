var js2xmlparser = require("js2xmlparser");

var ATTRIBUTES = {
    DIAL: {
        "action": "http://host:port/path",
        "method": "POST",
        "timeout": 20,
        "timeLimit": 60,
        "callerId": "0987654321",
        "record": true
    },
    SAY: {
        "voice": "woman",
        "language": "en",
        "loop": 1
    },
    NUMBER: {
        "sendDigits": "123453",
        "url": "http://...",
        "method": "POST",
        "statusCallbackEvent": "ringing",
        "statusCallback": "http://...",
        "statusCallbackMethod": "POST"
    },
    CLIENT: {
        "name": "Alice",
        "url": "http://...",
        "method": "POST",
        "statusCallbackEvent": "ringing",
        "statusCallback": "http://...",
        "statusCallbackMethod": "POST"
    },
    SIP: {
        "name": "Alice",
        "url": "http://...",
        "method": "POST",
        "statusCallbackEvent": "ringing",
        "statusCallback": "http://...",
        "statusCallbackMethod": "POST"
    },
    REDIRECT: {
        "method": "POST"
    },
    REJECT: {
        "reason": "busy"
    },
    SMS: {
        "to": "0012341",
        "from":"94940402",
        "action":"http://...",
        "method": "POST",
        "statusCallback": "http://..."
    }
};

var BODIES = {
    DIAL: "1234567890",
    SAY: "Testing in progress",
    NUMBER: "1234567890",
    CLIENT: "Alice",
    SIP: "sip:alice@example.com",
    REDIRECT: "http://foobar.com/instructions",
    SMS: "Text message ..."
};

exports.ATTRIBUTES = ATTRIBUTES;
exports.BODIES = BODIES;
exports.empty = js2xmlparser.parse('Response', {});
exports.hangup = js2xmlparser.parse('Response', {
    Hangup: {}
});
exports.dial = js2xmlparser.parse('Response', {
    Dial: {
        "#": BODIES.DIAL,
        "@": ATTRIBUTES.DIAL
    }
});
exports.say = js2xmlparser.parse('Response', {
    Say: {
        "#": BODIES.SAY,
        "@": ATTRIBUTES.SAY
    }
});
exports.number = js2xmlparser.parse('Response', {
    Number: {
        "#": BODIES.NUMBER,
        "@": ATTRIBUTES.NUMBER
    }
});
exports.client = js2xmlparser.parse('Response', {
    Client: {
        "#": BODIES.CLIENT,
        "@": ATTRIBUTES.CLIENT
    }
});
exports.sip = js2xmlparser.parse('Response', {
    Sip: {
        "#": BODIES.SIP,
        "@": ATTRIBUTES.SIP
    }
});
exports.redirect = js2xmlparser.parse('Response', {
    Redirect: {
        "#": BODIES.REDIRECT,
        "@": ATTRIBUTES.REDIRECT
    }
});
exports.sms = js2xmlparser.parse('Response', {
    Sms: {
        "#": BODIES.SMS,
        "@": ATTRIBUTES.SMS
    }
});
exports.reject = js2xmlparser.parse('Response', {
    Reject: {
        "@": ATTRIBUTES.REJECT
    }
});