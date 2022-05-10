var callsTotal = 0;
var smsTotals = 0;

document.querySelector(".addToBillBtn").addEventListener("click", function () {
  var billTypeEntered = document.querySelector(".billTypeText").value;
 
  if (billTypeEntered.toLowerCase() === "call") {
  
    callsTotal += 2.75;
  } else if (billTypeEntered.toLowerCase() === "sms") {
    smsTotals += 0.75;
   
  } else if (billTypeEntered !== "sms" || billTypeEntered !== "call") {
    document.querySelector(".totalOne").textContent = 0;
  }
  document.querySelector(".callTotalOne").innerHTML = callsTotal.toFixed(2);
  document.querySelector(".smsTotalOne").innerHTML = smsTotals.toFixed(2);

  var totalCost = callsTotal + smsTotals;
  document.querySelector(".totalOne").innerHTML = totalCost.toFixed(2);
  if (totalCost >= 50) {
    document.querySelector(".totalOne").classList.add("danger");
  } else if (totalCost >= 30) {
    document.querySelector(".totalOne").classList.add("warning");
  }
});

//
