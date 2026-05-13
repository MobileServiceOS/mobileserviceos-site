// Mobile Service OS — landing page
(function () {
  'use strict';

  // Auto year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for in-page nav anchors
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', href);
      }
    });
  });

  // Close other FAQ details when opening one (accordion behavior)
  var faqDetails = document.querySelectorAll('.faq-list details');
  faqDetails.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) {
        faqDetails.forEach(function (other) {
          if (other !== d && other.open) other.open = false;
        });
      }
    });
  });
})();
