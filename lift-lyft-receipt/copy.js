// Autocopy data after DOM loads
window.onload=function copyIt() {
   
   document.getElementById("copy").addEventListener("click", function copyIt() {
      
     var copyText = document.getElementById("dataForCopy");
     copyText.select();
     document.execCommand("copy");
     
     // Alert better off to minimize clicking?
     //alert("Your receipt has been copied.");
   });
};

