var sid   = "fakeAccountSid";
var frendlyName = "fakeAccountFriendlyName";
var emailAddress = "fakeEmail@40fake.com";
var role = "fakeAccountRole";
var organizationSid = 'fakeOrganizationSid';

exports.sid    = sid;
exports.frendlyName  = frendlyName;
exports.emailAddress  = emailAddress;
exports.invalidSid = undefined;
exports.organizationSid = organizationSid;


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
exports.response       = {
  sid: sid,
  friendly_name: frendlyName,
  email_address:emailAddress,
  role:role
}
exports.array = [
  {
    sid: sid,
    friendly_name: frendlyName,
    email_address:emailAddress,
    role:role
  },
  {
    sid: "secondFakeAccountSid",
    friendly_name: "secondFakeAccountFriendlyName",
    email_address:"secondFakeEmail@fake.com",
    role:role
  }
];