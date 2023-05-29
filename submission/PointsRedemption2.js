document.getElementById('redeem-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var redeemPointsInput = document.getElementById('points-redeem');
  var redeemPoints = parseInt(redeemPointsInput.value);
  
  var totalPointsElement = document.getElementById('points');
  var totalPoints = parseInt(totalPointsElement.textContent);
  
  if (isNaN(redeemPoints) || redeemPoints <= 0) {
    alert('Please enter a valid amount of points to redeem.');
    return;
  }
  
  if (redeemPoints <= totalPoints) {
    var remainingPoints = totalPoints - redeemPoints;
    var cashBackAmount = redeemPoints * 0.01; // Replace with your cash back calculation logic
    
    totalPointsElement.textContent = remainingPoints;
    document.getElementById('remaining-points').textContent = remainingPoints;
    document.getElementById('cash-back').textContent = cashBackAmount.toFixed(2);
    document.getElementById('result').style.display = 'block';
    
    redeemPointsInput.value = ""; // Reset the input field
  } else {
    alert('Insufficient points. Please enter a valid amount.');
  }
});
