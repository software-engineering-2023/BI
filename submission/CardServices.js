// Get all the action buttons
const actionButtons = document.querySelectorAll('.action-button');

// Add event listeners to the buttons
actionButtons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// Handle button click event
function handleButtonClick(event) {
  const button = event.target;
  const row = button.closest('tr');
  const cardNumber = row.cells[0].textContent;

  // Perform the corresponding action based on the button clicked
  if (button.textContent === 'View Card Points') {
    redirectToCardPoints(cardNumber);
  } else if (button.textContent === 'View Pending Charges') {
    redirectToPendingCharges(cardNumber);
  } else if (button.textContent === 'View Transaction History') {
    redirectToTransactionHistory(cardNumber);
  }
}

function redirectToCardPoints(cardNumber) {
  // Handle redirection to card points page for the specific card
  console.log(`Redirecting to Card Points for Card Number: ${cardNumber}`);
  
  // Replace the URL below with the actual URL of the card points page for the specific card
  if (cardNumber === '2864 3675 9287 6742') {
    window.location.href = 'PointsRedemption1.html';
  } else if (cardNumber === '9876 5432 1098 7654') {
    window.location.href = 'PointsRedemption2.html';
  }
  // Add more conditions for other card numbers if needed
}

function redirectToPendingCharges(cardNumber) {
  // Handle redirection to pending charges page for the specific card
  console.log(`Redirecting to Pending Charges for Card Number: ${cardNumber}`);
  
  // Replace the URL below with the actual URL of the pending charges page for the specific card
  if (cardNumber === '2864 3675 9287 6742') {
    window.location.href = 'CardCharge1.html';
  } else if (cardNumber === '9876 5432 1098 7654') {
    window.location.href = 'CardCharge2.html';
  }
  // Add more conditions for other card numbers if needed
}

function redirectToTransactionHistory(cardNumber) {
  // Handle redirection to transaction history page for the specific card
  console.log(`Redirecting to Transaction History for Card Number: ${cardNumber}`);
  
  // Replace the URL below with the actual URL of the transaction history page for the specific card
  if (cardNumber === '2864 3675 9287 6742') {
    window.location.href = 'CardTransactions1.html';
  } else if (cardNumber === '9876 5432 1098 7654') {
    window.location.href = 'CardTransactions2.html';
  }
  // Add more conditions for other card numbers if needed
}
