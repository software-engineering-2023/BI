// Get the cancel button element
const cancelButton = document.getElementById("cancel-btn");

// Add event listener to handle cancel button click
cancelButton.addEventListener("click", function() {
  // Redirect to the accounts page
  window.location.href = "accounts.html";
});

// Get the form element
const openAccountForm = document.getElementById("open-account-form");

// Add event listener to handle form submission
openAccountForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Perform any necessary validation or processing with the form values

  // Redirect to the confirmation page
  window.location.href = "open-account-msg.html";
});
