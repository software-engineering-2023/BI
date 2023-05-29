
const closeButtons = document.querySelectorAll('.close-button');


closeButtons.forEach((button) => {
 
  button.addEventListener('click', (event) => {
  
    const row = event.target.parentNode.parentNode;
 
    row.parentNode.removeChild(row);
  });
});
