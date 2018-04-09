var sid   = "fakeAccountSid";
var frendlyName = "fakeAccountFriendlyName";
var emailAddress = "fakeEmail@40fake.com";
var role = "fakeAccountRole";
exports.sid    = sid;
exports.frendlyName  = frendlyName;
exports.emailAddress  = emailAddress;

exports.one       = {
  Sid: sid,
  FriendlyName: frendlyName,
  EmailAddress:emailAddress,
  Role:role
}
exports.createOneSuccess       = {
  FriendlyName: frendlyName,
  Password:"NewPassword",
  EmailAddress:emailAddress,
  Role:role
}
exports.createOneError       = {
  FriendlyName: frendlyName,
  Password:undefined,
  EmailAddress:emailAddress,
  Role:undefined
}
exports.array = [
  {
    Sid: sid,
    FriendlyName: frendlyName,
    EmailAddress:emailAddress,
    Role:role
  },
  {
    Sid: "secondFakeAccountSid",
    FriendlyName: "secondFakeAccountFriendlyName",
    EmailAddress:"secondFakeEmail@fake.com",
    Role:role
  }
];