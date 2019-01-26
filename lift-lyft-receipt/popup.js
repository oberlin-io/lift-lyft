// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {

   // Order of labels. Labels must == data dictionary keys in payload data. Order reflects data destination.
   labelArray = [
      "Ride Receipt #",
      "Date",
      "Pick-up",
      "Drop-off",
      "Received: Earnings",
      "Received: Tips",
      "Received: Prime Time",
      "Received: Total",
      "Passenger: Ride Payments",
      "Passenger: Tips",
      "Passenger: Prime Time",
      "Passenger: Total"
   ];

   // Insert data into table according to labelArray
   var content = "<table>\n";
   content += "<tr>\n";
   for (i = 0; i < labelArray.length; i++) {
      content += "<td>" + labelArray[i] + "</td>\n";
   }
   content += "</tr>\n";
   content += "<tr>\n";
   for (i = 0; i < labelArray.length; i++) {
      content += "<td>" + data[labelArray[i]] + "</td>\n";
   }
   content += "</tr>\n";
   content += "</table>\n" ;
   
   //var output = JSON.stringify(message, null, 2);
   
	document.getElementById('output').innerHTML = output;
});