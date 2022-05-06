//get a reference to the calculate button
//const calculateBtn = document.querrySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

document
  .querySelector(".calculateBtn")
  .addEventListener("click", calculateBtnClicked);

function calculateBtnClicked() {
  var billString = billStringElement.value;
  var billTotal = 0;
  var callsAndSms = billString.split(",");
  for (var i = 0; i < callsAndSms.length; i++) {
    if (callsAndSms[i].trim().toLowerCase().includes("call")) {
      billTotal += 2.75;
    } else if (callsAndSms[i].trim().toLowerCase().includes("sms")) {
      billTotal += 0.65;
    }
  }
  var roundedBillTotal = billTotal.toFixed(2);
  billTotalElement.textContent = roundedBillTotal;
  var currentTotal = Number(billTotalElement.textContent);
  document.querySelector(".total").classList.remove("warning");
  document.querySelector(".total").classList.remove("danger");

  if (currentTotal >= 20 && currentTotal < 30) {
    document.querySelector(".total").classList.add("warning");
  } else if (currentTotal >= 30) {
    document.querySelector(".total").classList.add("danger");
  }
}
