// LOAD ON REVEAL

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', reveal);

// LOAD ON PAGE LOAD

// Function to add 'animate' class to elements with class 'load'
function animateElements() {
  const elements = document.querySelectorAll(
    '.load, .load-delayed-100, .load-delayed-200, .load-delayed-400, .load-delayed-600 '
  );
  elements.forEach(element => {
    element.classList.add('animate');
  });
}

// Event listener for page load
window.addEventListener('load', () => {
  animateElements(); // Call the function to animate elements when page finishes loading
});
