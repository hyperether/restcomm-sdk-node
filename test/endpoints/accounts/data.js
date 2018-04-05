var sid   = "fakeAccountSid";
var frendlyName = "fakeAccountFriendlyName";
var emailAddress = "fakeEmail%40fake.com";
exports.sid    = sid;
exports.frendlyName  = frendlyName;
exports.emailAddress  = emailAddress;
exports.one       = {
  Sid: sid,
  FriendlyName: frendlyName,
  EmailAddress:emailAddress
}
exports.array = [
  {
    Sid: sid,
    FriendlyName: frendlyName,
    EmailAddress:emailAddress
  },
  {
    Sid: "secondFakeAccountSid",
    FriendlyName: "secondFakeAccountFriendlyName",
    EmailAddress:"secondFakeEmail@fake.com"
  }
];