// get a reference to the textbox where the bill type is to be entered
//const addBills = document.querySelector(".billTypeText");
//get a reference to the add button

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotals = 0;
//add an event listener for when the add button is pressed
document.querySelector(".addToBillBtn").addEventListener("click", function () {
  var billTypeEntered = document.querySelector(".billTypeText").value;
  //in the event listener check if the value in the bill type textbox is 'sms' or 'call'
  if (billTypeEntered.toLowerCase() === "call") {
    //add the appropriate value to the running total
    callsTotal += 2.75;
  } else if (billTypeEntered.toLowerCase() === "sms") {
    smsTotals += 0.75;
    // * add nothing for invalid values that is not 'call' or 'sms'.
  } else if (billTypeEntered !== "sms" || billTypeEntered !== "call") {
    document.querySelector(".totalOne").textContent = 0;
  }
  document.querySelector(".callTotalOne").innerHTML = callsTotal.toFixed(2);
  document.querySelector(".smsTotalOne").innerHTML = smsTotals.toFixed(2);
  // * display the latest total on the screen
  var totalCost = callsTotal + smsTotals;
  document.querySelector(".totalOne").innerHTML = totalCost.toFixed(2);
  if (totalCost >= 50) {
    document.querySelector(".totalOne").classList.add("danger");
  } else if (totalCost >= 30) {
    document.querySelector(".totalOne").classList.add("warning");
  }
});

//
