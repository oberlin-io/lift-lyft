// Lyft Ride Scraper
// Deploy in devtools console on:
//  https://www.lyft.com/drive/detail/route/<ride receipt #>/breakdown
//
// oberl.info
// oberljn@gmail.com


// Scrape and build dictionary
var data = {};

data["Ride Receipt #"] = document
   .querySelectorAll("div.align-center")[1]
   .innerText
   .match(/^Ride Receipt #: (.*$)/)[1]
;

data["Date"] = document
   .querySelector("div.p-y-m")
   .innerText
   .match(/(^.{3} \d{1,2}, 20\d\d),.*$/)[1]
;

data["Pick-up"] = document
   .querySelectorAll("strong.ng-binding")[0]
   .innerText
   .match(/(^\d{1,2}:\d{2} .M) Pick-up$/)[1]
;

data["Drop-off"] = document.
   querySelectorAll("strong.ng-binding")[1]
   .innerText
   .match(/(^\d{1,2}:\d{2} .M) Drop-off$/)[1]
;

data["Received: Earnings"] = document
   .querySelector("div.line-item-ride_payments")
   .querySelectorAll("div.ng-binding")[1]
   .innerText
;

data["Received: Tips"] = document
   .querySelector("div.line-item-tips")
   .querySelectorAll("div.ng-binding")[1]
   .innerText;

// FIX: Need Prime Time class
//data["You Received: Prime Time"] = document
//   .querySelector("div.???")
//   .querySelectorAll("div.ng-binding")[1]
//   .innerText
//;

data["Received: Total"] = document
   .querySelectorAll("div.line-item-")[0]
   .querySelectorAll("div.ng-binding")[1]
   .innerText
;

data["Passenger: Ride Payments"] = document
   .querySelector("div.line-item-pax_payments")
   .querySelectorAll("div.ng-binding")[1]
   .innerText
;

data["Passenger: Tips"] = document
   .querySelector("div.line-item-pax_tips")
   .querySelectorAll("div.ng-binding")[1]
   .innerText
;

// FIX: Need Prime Time class
//data["Passenger: Prime Time"] = document
//   .querySelector("div.???")
//   .querySelectorAll("div.ng-binding")[1]
//   .innerText
//;

data["Passenger: Total"] = document
   .querySelectorAll("div.line-item-")[1]
   .querySelectorAll("div.ng-binding")[1]
   .innerText
;

 
//console.log(data)

// Send scraped data as a Chrome message
chrome.runtime.sendMessage(data);


