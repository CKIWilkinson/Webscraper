var cheerio = require("cheerio");
var request = require("request");
var Knwl = require("knwl.js");
var knwlInstance = new Knwl;

//gets web address from email address
var emailAddress = "brianjarvis@3aaa.co.uk";
var addressPosition = (emailAddress.indexOf("@") + 1);
var address = ("http://www." + emailAddress.slice(addressPosition));
console.log(address);

//Beginning of the scraping portion
request (address, function (error, response, html) {
	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);
		knwlInstance.init($);
		var phoneNumbers = knwlInstance.get("phones");
		console.log(phoneNumbers);
	}
})

