document.addEventListener("DOMContentLoaded", function() {

  function handleLogin(event) {
    event.preventDefault();
    // Get the email and password entered by the user
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

      // Dummy data array to simulate registered users
     const users = [
      { email: "tameemglewo1@gmail.com", password: "Tameem29102002", accountType: "client", name: "Tameem" },
      { email: "waelwello@gmail.com", password: "Wael31102002", accountType: "banker", name: "Wael" },
      { email: "timmy@gmail.com", password: "Timmy29102002", accountType: "admin", name: "Timmy" }, 
      { email: "janaclara@gmail.com", password: "Clarajana", accountType: "client", name: "Clara-Jana" }
    ];

    // Find the user in the array based on the entered email and password
    const user = users.find(u => u.email === email && u.password === password); 

    // Retrieve the signup information from localStorage
    const signupData = JSON.parse(localStorage.getItem("signupData"));

    // Check if the user exists
    if (user) {
      // Redirect to the corresponding page based on the account type
      switch (user.accountType) {
        case "client":
          window.location.href = "clientPage.html";
          break;
        case "banker":
          window.location.href = "bankerPage.html";
          break;
        case "admin":
          window.location.href = "adminPage.html";
          break;
        default:
          break;
      }
    } 
    // Check if signupData exists and email/password match
    else if (signupData && signupData.email === email && signupData.password === password) {
      // Redirect to the corresponding page based on the account type
      switch (signupData.accountType) {
        case "client":
          window.location.href = "clientPage.html";
          break;
        case "banker":
          window.location.href = "bankerPage.html";
          break;
        case "admin":
          window.location.href = "adminPage.html";
          break;
        default:
          break;
      }
    } else {
      alert("Invalid email or password");
    }

    if (signupData) {
      // Store the logged-in user's name in sessionStorage
      sessionStorage.setItem("username", signupData.name);
    }
    else if (user) {
      // Store the logged-in user's name in sessionStorage
      sessionStorage.setItem("username", user.name);
    }
    
    
  }
  
 
  document.getElementById("login-form").addEventListener("submit", handleLogin);
});
