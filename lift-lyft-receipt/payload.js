// Lyft Ride Scraper
// Deploy in devtools console on:
//  https://www.lyft.com/drive/detail/route/<ride receipt #>/breakdown
//
// oberl.info
// oberljn@gmail.com


// Scrape and build dictionary

// Null check function
function checkNull(qSelectorStr) {
   if (document.querySelector(qSelectorStr) === null) {return true}
   else {false}
}

// Store in JSON format
var data = {};

// Ride receipt #
selector = "div.align-center"

if (checkNull(selector) === true) {data["Ride Receipt #"] = null}
else {
   data["Ride Receipt #"] = document
      .querySelectorAll(selector)[1]
      .innerText
      .match(/^Ride Receipt #: (.*$)/)[1];
}

// Date
selector = "div.p-y-m"

if (checkNull(selector) === true) {data["Date"] = null}
else {
   data["Date"] = document
      .querySelector(selector)
      .innerText
      .match(/(^.{3} \d{1,2}, 20\d\d),.*$/)[1];
}


// Pick-up
selector = "strong.ng-binding"

if (checkNull(selector) === true) {data["Pick-up"] = null}
else {
   data["Pick-up"] = document
      .querySelectorAll(selector)[0]
      .innerText
      .match(/(^\d{1,2}:\d{2} .M) Pick-up$/)[1];
}


// Drop-off
selector = "strong.ng-binding"

if (checkNull(selector) === true) {data["Drop-off"] = null}
else {
   data["Drop-off"] = document.
      querySelectorAll(selector)[1]
      .innerText
      .match(/(^\d{1,2}:\d{2} .M) Drop-off$/)[1]
   ;
}

// Received: Earnings
selector = "div.line-item-ride_payments"

if (checkNull(selector) === true) {data["Received: Earnings"] = null}
else {
   data["Received: Earnings"] = document
      .querySelector(selector)
      .querySelectorAll("div.ng-binding")[1]
      .innerText
;
}



// Received: Tips
selector = "div.line-item-tips"
if (document.querySelector(selector) === null)
   {data["Received: Tips"] = null}
   else
   {
      data["Received: Tips"] = document
         .querySelector(selector)
         .querySelectorAll("div.ng-binding")[1]
         .innerText
      ;
   
   }



// Received: Prime Time
selector = "div.line-item-prime_time"
if (document.querySelector(selector) === null)
   {data["Received: Prime Time"] = null}
   else
   {
      data["Received: Prime Time"] = document
         .querySelector(selector)
         .querySelectorAll("div.ng-binding")[1]
         .innerText
;
   }




// Received: Total
selector = "div.line-item-"
if (document.querySelector(selector) === null)
   {data["Received: Total"] = null}
   else{
   
data["Received: Total"] = document
   .querySelectorAll(selector)[0]
   .querySelectorAll("div.ng-binding")[1]
   .innerText
;}


// Passenger: Ride Payments
selector = "div.line-item-pax_payments"
if (document.querySelector(selector) === null)
   {data["Passenger: Ride Payments"] = null}
   else{
   data["Passenger: Ride Payments"] = document
      .querySelector(selector)
      .querySelectorAll("div.ng-binding")[1]
      .innerText
   ;
   }

// Passenger: Tips
selector = "div.line-item-pax_tips"

if (document.querySelector(selector) === null)
   {data["Passenger: Tips"] = null}
   else
   {
      
      data["Passenger: Tips"] = document
         .querySelector(selector)
         .querySelectorAll("div.ng-binding")[1]
         .innerText
      ;
   }




// Passenger: Total
// Technically, nullCheck is not checking this one
selector = "div.line-item-"

if (document.querySelector(selector) === null)
   {data["Passenger: Total"] = null}
   else
   {
      data["Passenger: Total"] = document
         .querySelectorAll(selector)[1]
         .querySelectorAll("div.ng-binding")[1]
         .innerText
      ;
   }


// Map
//if (document.querySelector('div.map').getAttribute("style")
//   .match(/^background-image:url\((.*)\)/)[1] === null) {data["Map"] = null }
//   else {
//data["Map"] = document.querySelector('div.map').getAttribute("style")
//   .match(/^background-image:url\((.*)\)/)[1]
//   }







 
//console.log(data)

// Send scraped data as a Chrome message
chrome.runtime.sendMessage(data);


