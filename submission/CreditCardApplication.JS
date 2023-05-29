document.addEventListener("DOMContentLoaded", function() {
    var citizenshipSelect = document.getElementById("citizenship");
    var idSection = document.getElementById("idSection");
    var passportSection = document.getElementById("passportSection");
    var nationalIdInput = document.getElementById("nationalId");
    var passportInput = document.getElementById("passport");
  
    // Set initial state
    idSection.style.display = "block";
    passportSection.style.display = "none";
    nationalIdInput.required = true;
    passportInput.required = false;
  
    citizenshipSelect.addEventListener("change", function() {
      if (citizenshipSelect.value === "citizen") {
        idSection.style.display = "block";
        passportSection.style.display = "none";
        nationalIdInput.required = true;
        passportInput.required = false;
      } else if (citizenshipSelect.value === "foreigner") {
        idSection.style.display = "none";
        passportSection.style.display = "block";
        nationalIdInput.required = false;
        passportInput.required = true;
      }
    });
  });
  




