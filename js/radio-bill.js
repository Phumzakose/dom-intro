// get a reference to the sms or call radio buttons
//const billItem = document.querySelector(".billItemTypeRadio");
//get a reference to the add button

//create a variable that will keep track of the total bill
var callsCount = 0;
var smsCount = 0;

//add an event listener for when the add button is pressed
document
  .querySelector(".radioBillAddBtn")
  .addEventListener("click", function () {
    //var billTyped = document.querySelector(".billItemTypeRadio").value;
    var checkedRadioBtn = document.querySelector(
      "input[name='billItemType']:checked"
    );
    if (checkedRadioBtn) {
      var billItemType = checkedRadioBtn.value;
      // billItemType will be 'call' or 'sms'
    }
    if (billItemType === "sms") {
      smsCount += 0.75;
    } else if (billItemType === "call") {
      callsCount += 2.75;
    }
    document.querySelector(".callTotalTwo").innerHTML = callsCount.toFixed(2);
    document.querySelector(".smsTotalTwo").innerHTML = smsCount.toFixed(2);
    // * display the latest total on the screen
    var totalCost = callsCount + smsCount;
    document.querySelector(".totalTwo").innerHTML = totalCost.toFixed(2);
    if (totalCost >= 50) {
      document.querySelector(".totalTwo").classList.add("danger");
    } else if (totalCost >= 30) {
      document.querySelector(".totalTwo").classList.add("warning");
    }
  });

// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
