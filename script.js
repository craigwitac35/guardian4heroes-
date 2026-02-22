// STICKY HEADER LOGIC
window.addEventListener('scroll', function() {
  const header = document.querySelector('.site-header');
  
  // If the user scrolls down more than 50 pixels, add the dark background
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    // If they scroll back to the very top, make it transparent again
    header.classList.remove('scrolled');
  }
});
