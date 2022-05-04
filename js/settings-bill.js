// get a reference to the sms or call radio buttons
//const billItems = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings
var calls = 0;
var sms = 0;
var criticalValue = 0;
var warningValue = 0;
// create a variables that will keep track of all three totals.
var callTotal = 0;
var smsTotal = 0;
var total = 0;
//add an event listener for when the 'Update settings' button is pressed

document
  .querySelector(".updateSettings")
  .addEventListener("click", function () {
    calls = Number(document.querySelector(".callCostSetting").value);
    sms = Number(document.querySelector(".smsCostSetting").value);
    warningValue = Number(document.querySelector(".warningLevelSetting").value);
    criticalValue = Number(
      document.querySelector(".criticalLevelSetting").value
    );
  });

//add an event listener for when the add button is pressed
document.querySelector(".addition").addEventListener("click", function () {
  var checkedRadioBtn = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked"
  );
  if (checkedRadioBtn) {
    var billItemTypeWithSettings = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
  }
  if (billItemTypeWithSettings === "sms") {
    if (criticalValue > total) {
      smsTotal += sms;
    }
  } else if (billItemTypeWithSettings === "call") {
    if (criticalValue > total) {
      callTotal += calls;
    }
  }
  document.querySelector(".callTotalSettings").innerHTML = callTotal.toFixed(2);
  document.querySelector(".smsTotalSettings").innerHTML = smsTotal.toFixed(2);
  // * display the latest total on the screen
  total = callTotal + smsTotal;
  document.querySelector(".totalSettings").innerHTML = total.toFixed(2);

  if (total !== criticalValue) {
    document.querySelector(".totalSettings").classList.remove("danger");
  } else if (total !== criticalValue) {
    document.querySelector(".totalSettings").classList.remove("warning");
  }

  if (total >= criticalValue) {
    document.querySelector(".totalSettings").classList.add("danger");
  } else if (total >= warningValue) {
    document.querySelector(".totalSettings").classList.add("warning");
  }
});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
