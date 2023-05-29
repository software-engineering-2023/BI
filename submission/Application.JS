const citizenshipSelect = document.getElementById('citizenship');
const idSection = document.getElementById('idSection');
const passportSection = document.getElementById('passportSection');

citizenshipSelect.addEventListener('change', function() {
  if (citizenshipSelect.value === 'citizen') {
    idSection.style.display = 'block';
    passportSection.style.display = 'none';
  } else if (citizenshipSelect.value === 'foreigner') {
    idSection.style.display = 'none';
    passportSection.style.display = 'block';
  }
});





