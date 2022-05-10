const billTotalElement = document.querySelector(".billTotal");
const billStringElement = document.querySelector(".billString");

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
