//Initialisation
var request = require("request");
var Knwl = require("knwl.js");
var knwlInstance = new Knwl;

//gets web address from email address
var emailAddress = "HDanby@express-its.com";
var addressPosition = (emailAddress.indexOf("@") + 1);
var address = ("http://www." + emailAddress.slice(addressPosition));
console.log(address);

//Beginning of the scraping portion
request (address, function (error, response, html) {
	if (!error && response.statusCode == 200) {
		knwlInstance.init(html);
		var emails = knwlInstance.get("emails");
		console.log("Email addresses found:");
		//Outputs all found email addresses
		var emailAddresses = new Array;		//Stores the addresses in an array for future manipulation
		for (var i = 0; i < emails.length; i++) {
			var duplicate = false
			//Prevents duplicate email addresses from being output
			for (var z = i - 1; z > -1; z--) {
				if (emails[i].address == emails[z].address) {
					duplicate = true
				}

			}			
			if (duplicate == false) {
				console.log(emails[i]);
				emailAddresses.push(emails[i]);
			}
		}
		
	}
})

