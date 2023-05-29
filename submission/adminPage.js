// Retrieve the logged-in user's name from sessionStorage
const username = sessionStorage.getItem("username");
document.getElementById("username").textContent = username;

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

showSlide(); // Display the first slide
setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust the interval as needed)
