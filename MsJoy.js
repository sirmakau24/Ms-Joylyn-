// Initialize AOS
AOS.init();

// Scroll to top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};