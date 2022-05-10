// get a reference to the sms or call radio buttons
//const billItems = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

//add an event listener for when the 'Update settings' button is pressed
var settingsInstance = BillWithSettings();
document
  .querySelector(".updateSettings")
  .addEventListener("click", function () {
    settingsInstance.setCallCost(
      Number(document.querySelector(".callCostSetting").value)
    );
    settingsInstance.setSmsCost(
      Number(document.querySelector(".smsCostSetting").value)
    );
    //alert(sms);
    settingsInstance.setWarningLevel(
      Number(document.querySelector(".warningLevelSetting").value)
    );
    settingsInstance.setCriticalLevel(
      Number(document.querySelector(".criticalLevelSetting").value)
    );
    changeColor();
  });

//add an event listener for when the add button is pressed
document.querySelector(".addition").addEventListener("click", function () {
  //alert(settingsInstance.getCallCost());
  var checkedRadioBtn = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked"
  );
  if (checkedRadioBtn) {
    var billItemTypeWithSettings = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
  }
  if (billItemTypeWithSettings === "sms") {
    settingsInstance.sendSms();
  } else if (billItemTypeWithSettings === "call") {
    settingsInstance.makeCall();
  }
  document.querySelector(".callTotalSettings").innerHTML = settingsInstance
    .getTotalCallCost()
    .toFixed(2);
  document.querySelector(".smsTotalSettings").innerHTML = settingsInstance
    .getTotalSmsCost()
    .toFixed(2);
  // * display the latest total on the screen
  //total = callTotal + smsTotal;
  document.querySelector(".totalSettings").innerHTML = settingsInstance
    .getTotalCost()
    .toFixed(2);
  changeColor();
});
function changeColor() {
  document.querySelector(".totalSettings").classList.remove("danger");
  document.querySelector(".totalSettings").classList.remove("warning");
  // alert(settingsInstance.totalClassName());
  document
    .querySelector(".totalSettings")
    .classList.add(settingsInstance.totalClassName());
}
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
