document.addEventListener('DOMContentLoaded', function () {
    const payButtons = document.querySelectorAll('.pay-button');
    const modal = document.getElementById('payment-modal');
    const modalCloseButton = document.getElementById('modal-close');
    const paymentForm = document.getElementById('payment-form');
    const accountNumberInput = document.getElementById('account-number');
    const paymentMethodSelect = document.getElementById('payment-method');
  
    // Event listener for payment method selection
    paymentMethodSelect.addEventListener('change', function () {
      const selectedPaymentMethod = paymentMethodSelect.value;
  
      // Hide all payment info div elements
      const paymentInfoFields = document.querySelectorAll('.payment-info');
      paymentInfoFields.forEach(function (field) {
        field.style.display = 'none';
      });
  
      // Show the relevant payment info div based on the selected payment method
      if (selectedPaymentMethod === 'Credit Card') {
        document.getElementById('credit-card-info').style.display = 'block';
      } else if (selectedPaymentMethod === 'Bank') {
        document.getElementById('bank-info').style.display = 'block';
      } else if (selectedPaymentMethod === 'Fawry') {
        document.getElementById('fawry-info').style.display = 'block';
      }
    });
  
    // Declare the billType and statusCell variables outside the event listeners
    let billType;
    let statusCell;
  
    // Event listener for pay buttons
    payButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission for demonstration purposes
  
        // Get the parent row of the clicked button
        const row = button.parentNode.parentNode;
  
        // Get the bill type and status
        billType = row.cells[0].textContent;
        statusCell = row.cells[3]; // Assign value to the statusCell variable
  
        // Display the payment modal
        modal.style.display = 'block';
  
        // Fill the payment form with the bill type
        document.getElementById('bill-type').textContent = billType;
  
        // Set focus on the account number input
        accountNumberInput.focus();
      });
    });
  
    // Function to show error message
    function showErrorMessage(message) {
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
    }
  
    // Function to hide error message
    function hideErrorMessage() {
      const errorMessage = document.getElementById('error-message');
      errorMessage.style.display = 'none';
    }
  
    // Event listener for payment form submission
  document.getElementById('pay-bill-button').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered account number and payment method
    const accountNumber = accountNumberInput.value;
    const paymentMethod = paymentMethodSelect.value;
    const CreditCardNumber = document.getElementById('card-number').value;
    const CreditCardHolder = document.getElementById('card-holder').value;
    const CreditCardExpirationMonth = document.getElementById('expiration-month').value;
    const CreditCardExpirationYear = document.getElementById('expiration-year').value;
    const CreditCardCVV = document.getElementById('cvv').value;
    const BankNumber = document.getElementById('receiver-account-number').value;
    const BankName = document.getElementById('receiver-bank-name').value;
    const FawryNumber = document.getElementById('fawry-number').value;
  
    // Perform payment logic
    if (accountNumber && paymentMethod && ((CreditCardNumber && CreditCardHolder && CreditCardExpirationMonth && CreditCardExpirationYear && CreditCardCVV) || (BankNumber && BankName) || (FawryNumber) )) {
      // Update the status to "Paid"
      statusCell.textContent = 'Paid';
      statusCell.classList.add('paid');
  
      // Store the payment details in localStorage
      const paymentDetails = {
        billType: billType,
        accountNumber: accountNumber,
        paymentMethod: paymentMethod
      };
      localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));
  
      // Hide the payment modal
     // Function to close the modal after a specified delay
function closeModal() {
    const modal = document.getElementById('payment-modal');
    modal.style.display = 'none';
  }
  
  // Function to display the success message and close the modal after a delay
  function CloseModalafterTime() {
    setTimeout(closeModal, 5000); // Close modal after 5 seconds (5000 milliseconds)
  }
  
  
      // Show success message
      showSuccessMessage();
      CloseModalafterTime();
      hideErrorMessage();
    } else {
      // Show error message if any field is missing
      showErrorMessage('Please provide a valid account number, payment method, or the selected payment method info.');
    }
  });
  
  
    // Function to show success message
    function showSuccessMessage() {
      const successMessage = document.getElementById('success-message');
      successMessage.style.display = 'block';
      setTimeout(function () {
        successMessage.style.display = 'none';
      }, 5000); // Hide the success message after 5 seconds
    }
  
    // Event listener for modal close button
    modalCloseButton.addEventListener('click', function () {
      // Hide the payment modal
      modal.style.display = 'none';
    });


   
  
  
  
  });
  