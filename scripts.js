document.addEventListener('DOMContentLoaded', function() {
  var coll = document.getElementsByClassName("collapsible");
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  const featureContainer = document.querySelector('.feature-container');
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function checkVisibility() {
    if (featureContainer && isInViewport(featureContainer)) {
      featureContainer.classList.add('animate');
    } else if (featureContainer) {
      featureContainer.classList.remove('animate');
    }
  }
  
  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Check visibility on page load

  var hamburgerMenu = document.getElementById('hamburger-menu');
  var mobileMenu = document.getElementById('mobile-menu');

  if (hamburgerMenu && mobileMenu) {
    hamburgerMenu.addEventListener('click', function(event) {
      mobileMenu.classList.toggle('show');
      event.stopPropagation(); // Prevent click from bubbling up to document
    });

    document.addEventListener('click', function(event) {
      if (!mobileMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        mobileMenu.classList.remove('show');
      }
    });

    // Close menu when clicking a menu item
    var menuItems = mobileMenu.querySelectorAll('ul li a');
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        mobileMenu.classList.remove('show');
      });
    });
  }
});
