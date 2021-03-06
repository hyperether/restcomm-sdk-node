var Promise                 = require("bluebird");
var request                 = Promise.promisify(require("request"));
var _                       = require("lodash");
var UnexpectedResponseError = require("./unexpectedResponseError");
var packageInfo             = require("./../package.json");
var Accounts                = require("../lib/endpoints/accounts");
var Clients                 = require("../lib/endpoints/clients");
var AvailablePhoneNumbers   = require("../lib/endpoints/availablePhoneNumbers");
var IncomingPhoneNumbers    = require("../lib/endpoints/incomingPhoneNumbers");
var Sms                     = require("../lib/endpoints/sms");
var UsageRecords                     = require("../lib/endpoints/usageRecords");
var Calls                     = require("../lib/endpoints/calls");




var _defaults = {
  baseUrl: "https://cloud.restcomm.com/restcomm/2012-04-24/Accounts"
};

var Client = function (config) {
  config = _.merge({}, _defaults, config);

  var handleResponse = function (response) {
    return new Promise(function(resolve, reject) {
      if (response.statusCode !== 200 && response.statusCode !== 201 && response.statusCode !== 202) {
        var message = "";
        if (response.body) {
          message = response.body.message || response.body;
        }
        return reject(new UnexpectedResponseError(message, response.statusCode));
      }
      return resolve(response);
    });
  };

  function getUserAgentHeader() {
    return packageInfo.name + "-v" + packageInfo.version;
  }

  function createRequestOptions(params) {
    return {
      url: config.baseUrl + "/" + (params.accountSid !== undefined ? params.accountSid : config.accountSid) +
        (params.path ? "/" + params.path : ""),
      headers: {
        "User-Agent": getUserAgentHeader(),
        "Content-Type": "application/x-www-form-urlencoded"
      },
      form: params.body,
      qs: params.qs,
      method: params.method || "GET",
      auth: {
        user: config.accountSid,
        pass: config.authToken
      },
      rejectUnauthorized: false,
      json: true,
      encoding: params.encoding || undefined
    };
  }

  this.makeRequest          = function (params) {
    return request(createRequestOptions(params)).then(handleResponse);
  }
  this.baseUrl = config.baseUrl;
  this.createRequestOptions = createRequestOptions;
  this.handleResponse       = handleResponse;
  this.accounts = new Accounts(this);
  this.clients = new Clients(this);
  this.availablePhoneNumbers = new AvailablePhoneNumbers(this);
  this.incomingPhoneNumbers = new IncomingPhoneNumbers(this);
  this.sms = new Sms(this);
  this.usageRecords = new UsageRecords(this);
  this.calls = new Calls(this);
  
  
   
};

module.exports = Client;
