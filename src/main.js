const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the 'show' class to the element when it comes into view
        entry.target.classList.add('show');
      } else{
        entry.target.classList.remove('show');
      }
    });
  });

  // Observe all elements with the 'hid' class
  const hiddenElements = document.querySelectorAll('.hid');
  hiddenElements.forEach((el) => observer.observe(el));