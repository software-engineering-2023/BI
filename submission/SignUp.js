document.addEventListener("DOMContentLoaded", function() {
  // Dummy data array to simulate registered email addresses
  const registeredEmails = [
    "tameemglewo1@gmail.com",
    "waelwello@gmail.com",
    "timmy@gmail.com"
  ];

  // Function to check if email is already registered
  function isEmailRegistered(email) {
    return registeredEmails.includes(email);
  }

  // Function to check if password is strong enough
  function isPasswordStrong(password) {
    // Define the strength criteria
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    // Check if the password meets the criteria
    if (password.length < minLength || !hasUpperCase || !hasLowerCase || !hasNumber) {
      return false;
    }

    return true;
  }

  // Function to handle form submission
  function handleSignup(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const accountType = document.getElementById("account-type").value;

    // Check if email is already registered
    if (isEmailRegistered(email)) {
      alert("This email is already registered.");
      return;
    }

    // Check if password is strong enough
    if (!isPasswordStrong(password)) {
      alert("Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, and a number.");
      return;
    }

    // Check if password matches confirmPassword
    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }

    // Create an object to store the signup information
    const signupData = {
      name: name,
      email: email,
      password: password,
      accountType: accountType
    };

    // Save the signup information to localStorage
    localStorage.setItem("signupData", JSON.stringify(signupData));

    alert("Registration successful!");
    window.location.href = "Login.html";
  }

  document.getElementById("signup-form").addEventListener("submit", handleSignup);
});
