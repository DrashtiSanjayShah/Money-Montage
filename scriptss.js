document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.fade-slide');
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function checkAnimation() {
      elements.forEach(function(el) {
        if (isElementInViewport(el)) {
          if (!el.classList.contains('animate')) {
            el.classList.add('animate');
          }
        } else {
          el.classList.remove('animate'); // Restart animation when scrolled away
        }
      });
    }
  
    // Check on load and when scrolling
    window.addEventListener('load', checkAnimation);
    window.addEventListener('scroll', checkAnimation);
  });
  