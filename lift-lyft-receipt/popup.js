// oberl.info  |  oberljn@gmail.com

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
      "Passenger: Total"
   ];

   // Insert data into table according to labelArray
   var tableContent = "<table>\n";
   for (i = 0; i < labelArray.length; i++) {
      tableContent += "<tr><td class='label_'>" + labelArray[i] + "</td>\n<td>" + message[labelArray[i]] + "</td>\n</tr>\n";
   }
   
   tableContent += "</table>\n" ;
   
   // Insert data into input value field for autocopy
   var inputContent = "<input type='text' id='dataForCopy' value='";
   for (i = 0; i < labelArray.length; i++) {
      inputContent += message[labelArray[i]] + "&#9;";
   }
   inputContent += "' />";
   
   
	document.getElementById('htmlTableOutput').innerHTML = tableContent;
	
	document.getElementById('htmlInputOutput').innerHTML = inputContent;
	
});