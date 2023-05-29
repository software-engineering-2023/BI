function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "none";
}



function payFullAmount() {
  const pendingChargeElement = document.getElementById("pending-charge");
  pendingChargeElement.textContent = "Pending charge = $0";

  closePopup("amountPopup");
  showPopup("successPopup");

}


function payPartially() {
  showPopup("amountPopup");
}

function closeAmountPopup() {
  const amountTextbox = document.getElementById("amountTextbox");
  const amount = parseFloat(amountTextbox.value);
  const pendingChargeElement = document.getElementById("pending-charge");
  const pendingChargeText = pendingChargeElement.textContent;
  const pendingCharge = parseFloat(pendingChargeText.replace(/[^\d.-]/g, ""));

  if (isNaN(amount)) {
    alert("Please enter a valid amount.");
    return;
  }

  if (amount <= 0) {
    alert("Amount must be greater than zero.");
    return;
  }

  if (amount > pendingCharge) {
    alert("Amount exceeds the pending charge.");
    return;
  }

  const remainingCharge = pendingCharge - amount;
  pendingChargeElement.textContent = `Pending charge = $${remainingCharge.toFixed(2)}`;

  closePopup("amountPopup");
  showPopup("successPopup");
}