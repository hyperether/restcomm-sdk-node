var path = 'AvailablePhoneNumbers/';
var defaultCountry = "US";

var AvailablePhoneNumbers = function (client) {
    this.client = client;
  };
  //https://cloud.restcomm.com/restcomm/2012-04-24/Accounts/{AccountSid}/AvailablePhoneNumbers/{IsoCountryCode}/Local
  AvailablePhoneNumbers.prototype.get = function(country){
    return this.client.makeRequest({path: path+(country || defaultCountry)+ '/Local'}).then(function(response){
      return Promise.resolve(response.body)
    }).catch(function(){return Promise.resolve()});
  };

  
  
  module.exports = AvailablePhoneNumbers;