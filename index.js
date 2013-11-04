var r = require("request");

// base entry point
var e = 'http://tuner.pandora.com/services/json/';


var partners = require('./partners.json');

// get partner session credentials
r.post(e + '?method=auth.partnerLogin')