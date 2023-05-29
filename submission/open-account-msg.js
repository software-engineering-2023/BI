document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the logged-in user's name from sessionStorage
    const username = sessionStorage.getItem("username");
    document.getElementById("username").textContent = username;

    const email = sessionStorage.getItem("email");
    document.getElementById("email").textContent = username;

    const type = sessionStorage.getItem("type");
    document.getElementById("type").textContent = username;
  });