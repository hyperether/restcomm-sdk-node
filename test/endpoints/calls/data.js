var callSid = "fakeCallSid";
exports.callSid = callSid;
exports.invalidCallSid = undefined;

exports.oneSuccess = {
    sid: "ID8deb35fc5121429fa96635ae",
    InstanceId: "ID8deb35fc5121429fa96",
    date_created: "Tue, 3 Apr 2018 12:55:22 +0000",
    date_updated: "Tue, 3 Apr 2018 12:55:54 +0000",
    account_sid: "ACc2739b9c47e49726e75809660dfbc41a",
    to: "marko",
    from: "nikola",
    status: "CANCELED",
    duration: 0,
    price_unit: "USD",
    direction: "Client-To-Client",
    caller_name: "nikola",
}
exports.oneError = {
    From: null,
    To: 'marko',
    Url:null
}
exports.oneCreate = {
    From: "nikola",
    To: "marko",
    Url:"http://127.0.0.1:8080/restcomm/demos/hello-play.xml"
}
exports.object = {
    page: 0,
    num_pages: 0,
    page_size: 50,
    total: 28,
    calls: [{
        sid: "ID8deb35fc5121429fa96635ae",
        InstanceId: "ID8deb35fc5121429fa96",
        date_created: "Tue, 3 Apr 2018 12:55:22 +0000",
        date_updated: "Tue, 3 Apr 2018 12:55:54 +0000",
        account_sid: "ACc2739b9c47e49726e75809660dfbc41a",
        to: "marko",
        from: "nikola",
        status: "CANCELED",
        duration: 0,
        price_unit: "USD",
        direction: "Client-To-Client",
        caller_name: "nikola",
    }, {
        sid: "ID8deb35fc5121429fa96635aebe3976d2",
        InstanceId: "ID8deb35fc5121429fa96",
        date_created: "Tue, 3 Apr 2018 12:55:22 +0000",
        date_updated: "Tue, 3 Apr 2018 12:55:54 +0000",
        account_sid: "ACc2739b9c47e49726e75809660dfbc41a",
        to: "marko",
        from: "nikola",
        status: "CANCELED",
        duration: 0,
        price_unit: "USD",
        direction: "Client-To-Client",
        caller_name: "nikola",
    }]
}