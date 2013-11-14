var r = require("request");

// base entry point
var e = 'http://tuner.pandora.com/services/json/';


var partners = require('./partners.json');

var Pandora = function(partner, cb){
  this.call('auth.partnerLogin', partners[partner], function(er, data){
    if (er) return cb(er);
    this.token = data.result.partnerAuthToken;
    cb(null, data.result);
  });
}

Pandora.prototype.call = function(method, params, cb){
   r.post(e + '?method=' + method, params, data);
};


module.exports = Pandora;


