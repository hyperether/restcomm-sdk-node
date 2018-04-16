
var smsMessageSid = "fakeSmsMessageSid";
exports.smsMessageSid = smsMessageSid;
exports.invalidSmsMessageSid= undefined;

exports.oneSuccess= {
    From:"Jelena",
    To:"+381644201552",
    Body:"Hello message..."
}
exports.oneError= {
    From:null,
    To:null,
    Body:"Hello message..."
}
exports.object = {
    page: 0,
    num_pages: 0,
    page_size: 50,
    total: 2,
    "messages": [{
            sid: "SM1e877eaf894040fca27ef373eb6e4cd3",
            account_sid: "ACc2739b9c47e49726e75809660dfbc41a",
            from: "+381638438906",
            to: "+381638438906",
            body: "Hello message",
            status: "sending",
            price: "0",
            price_unit: "USD",
        },
        {
            sid: "SM1e877eaf894040fca27ef373eb6e4cd3",
            account_sid: "ACc2739b9c47e49726e75809660dfbc41a",
            from: "+381638438906",
            to: "+381638438906",
            body: "Some message...",
            status: "sending",
            price: "0",
            price_unit: "USD"
        }
    ]

}