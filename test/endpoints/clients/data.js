var sid   = "fakeClientSid";
var frendlyName = "fakeClientFriendlyName";
var password = "fakePassword";

exports.sid    = sid;
exports.frendlyName  = frendlyName;
exports.response       = {
  sid: sid,
  friendly_name: frendlyName,
  password:password
}
exports.oneUpdate = {
  Sid: sid,
  FriendlyName: frendlyName,
  password: password
}
exports.array = [
  {
    Sid: sid,
    FriendlyName: frendlyName
  },
  {
    Sid: "secondFakeClientSid",
    FriendlyName: "secondFakeClientFriendlyName"
  }
];