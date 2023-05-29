document.addEventListener("DOMContentLoaded", function() {
    const acceptButtons = document.querySelectorAll(".accept-button");
    const rejectButtons = document.querySelectorAll(".reject-button");
  
    acceptButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const row = button.closest("tr");
        row.style.display = "none";
      });
    });
  
    rejectButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const row = button.closest("tr");
        row.style.display = "none";
      });
    });
  });
  