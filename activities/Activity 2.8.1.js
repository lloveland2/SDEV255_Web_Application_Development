let screenNameValid = false;
let zipCodeValid = false;
let tosAgreeValid = false;

let myForm = document.querySelector("#tosForm");
myForm.addEventListener("submit", checkForm);

let screenNameWidget = document.querySelector("#screenName");
screenNameWidget.addEventListener("input", checkScreenName);

let zipCodeWidget = document.querySelector("#zip");
zipCodeWidget.addEventListener("input", checkZipCode);

let tosWidget = document.querySelector("#tos");
tosWidget.addEventListener("input", checkTosAgree);

function checkScreenName() {
   let screenName = screenNameWidget.value.trim();
   screenNameValid = screenName.length > 0; 
   
   if (screenNameValid) {
      screenNameWidget.style.backgroundColor = "initial";
   }
   else {
      screenNameWidget.style.backgroundColor = "orange";
   }
}

function checkZipCode() {
   let regex = /^\d\d\d\d\d$/;
   let zip = zipCodeWidget.value.trim();
   zipCodeValid = zip.match(regex);  
   
   if (zipCodeValid) {
      zipCodeWidget.style.backgroundColor = "initial";
   }
   else {
      zipCodeWidget.style.backgroundColor = "orange";
   }
}

function checkTosAgree() {
   tosAgreeValid = tosWidget.value.trim().toLowerCase() === "yes";
   
   if (tosAgreeValid) {
      tosWidget.style.backgroundColor = "initial";
   }
   else {
      tosWidget.style.backgroundColor = "orange";
   }
}

function checkForm(event) {   
   if (!screenNameValid || !zipCodeValid || !tosValid) {
      event.preventDefault();
   }
}
