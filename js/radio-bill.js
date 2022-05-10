var callsCount = 0;
var smsCount = 0;

document
  .querySelector(".radioBillAddBtn")
  .addEventListener("click", function () {
    var checkedRadioBtn = document.querySelector(
      "input[name='billItemType']:checked"
    );
    if (checkedRadioBtn) {
      var billItemType = checkedRadioBtn.value;
    }
    if (billItemType === "sms") {
      smsCount += 0.75;
    } else if (billItemType === "call") {
      callsCount += 2.75;
    }
    document.querySelector(".callTotalTwo").innerHTML = callsCount.toFixed(2);
    document.querySelector(".smsTotalTwo").innerHTML = smsCount.toFixed(2);

    var totalCost = callsCount + smsCount;
    document.querySelector(".totalTwo").innerHTML = totalCost.toFixed(2);
    if (totalCost >= 50) {
      document.querySelector(".totalTwo").classList.add("danger");
    } else if (totalCost >= 30) {
      document.querySelector(".totalTwo").classList.add("warning");
    }
  });
