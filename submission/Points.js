document.getElementById('redeem-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var redeemPointsInput = document.getElementById('points-redeem');
    var redeemPoints = parseInt(redeemPointsInput.value);
    
    var totalPoints = 5000; // Replace with actual total points
    
    if (redeemPoints <= totalPoints) {
      var remainingPoints = totalPoints - redeemPoints;
      document.getElementById('points').textContent = remainingPoints;
      document.getElementById('message').textContent = 'Redemption successful! Cash back amount: $' + redeemPoints;
      document.getElementById('updated-points').textContent = remainingPoints;
      document.getElementById('result').style.display = 'block';
    } else {
      document.getElementById('message').textContent = 'Insufficient points. Please enter a valid amount.';
      document.getElementById('result').style.display = 'block';
    }
  });
  document.getElementById('redeem-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var redeemPointsInput = document.getElementById('points-redeem');
    var redeemPoints = parseInt(redeemPointsInput.value);
    
    var totalPoints = 5000; // Replace with actual total points
    
    if (redeemPoints <= totalPoints) {
      var remainingPoints = totalPoints - redeemPoints;
      var cashBackAmount = redeemPoints * 0.01; // Replace with your cash back calculation logic
      document.getElementById('points').textContent = remainingPoints;
      document.getElementById('remaining-points').textContent = remainingPoints;
      document.getElementById('cash-back').textContent = cashBackAmount.toFixed(2);
      document.getElementById('result').style.display = 'block';
      redeemPointsInput.value = ""; // Reset the input field
    } else {
      alert('Insufficient points. Please enter a valid amount.');
    }
  });
  
  
  