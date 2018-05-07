var util = require("util");

var UnsupportedResponseError = function (name) {
	Error.captureStackTrace(this, this.constructor);
	this.name = this.constructor.name;
	this.message = name + " Nested element is not supported";
};

util.inherits(UnsupportedResponseError, Error);

module.exports = UnsupportedResponseError;
