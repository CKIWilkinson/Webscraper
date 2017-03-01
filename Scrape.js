//Initialisation
var request = require("request");
var Knwl = require("knwl.js");
var knwlInstance = new Knwl;

//gets web address from email address
var strEmailAddress = "HDanby@thinkcre8.co.uk";
var intAddressPosition = (emailAddress.indexOf("@") + 1);
var strAddress = ("http://www." + strEmailAddress.slice(intAddressPosition));
console.log(strAddress);

//Beginning of the scraping portion
request (address, function (error, response, html) {
	if (!error && response.statusCode == 200) {
		knwlInstance.init(html);
		var arrEmails = knwlInstance.get("emails");
		console.log("Email addresses found:");
		//Outputs all found email addresses
		var arrEmailAddresses = new Array;		//Stores the addresses in an array for future manipulation
		for (var i = 0; i < arrEmailAdresses.length; i++) {
			var boolDuplicate = false
			//Prevents duplicate email addresses from being output
			for (var z = (i - 1); z > -1; z--) {
				if (arrEmails[i].address == arrEmails[z].address) {
					boolDuplicate = true
				}

			}			
			if (boolDuplicate == false) {
				console.log(arrEmails[i].address);
				arrEmailAddresses.push(emails[i].address);
			}
		}
		
	}
})

