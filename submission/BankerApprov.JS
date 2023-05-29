var acceptButtons = document.querySelectorAll('.accept-button');
var rejectButtons = document.querySelectorAll('.reject-button');

acceptButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });
});

rejectButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });
});
