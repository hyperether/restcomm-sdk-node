var accountSid = "fakeAccountSid";
var frendlyName = "+12015946224";
var phoneNumber = "12015946224";
var phoneNumberSid = "fakeIncomingPhoneNumberSid";
exports.invalidPhoneNumberSid= undefined;

exports.accountSid = accountSid;
exports.phoneNumberSid = phoneNumberSid;
exports.object = {
    page: 0,
    num_pages: 0,
    page_size: 50,
    total: 2,
    incomingPhoneNumbers: [{
            sid: "AD#54325A12321452452",
            FrendlyName: frendlyName,
            PhoneNumber: phoneNumber
        },
        {
            sid: "YTA1253232452452",
            FrendlyName: "+12015946244",
            PhoneNumber: "12015946244"
        }
    ]
};
exports.oneSuccess = {
    FrendlyName: frendlyName,
    PhoneNumber: phoneNumber
}
exports.oneError = {
    FrendlyName: frendlyName,
    PhoneNumber: undefined
}
