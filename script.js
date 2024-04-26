window.addEventListener('scroll', function() {
    var nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
      nav.style.backgroundColor = '#333'; // Change background color when scrolled
    } else {
      nav.style.backgroundColor = 'transparent';
    }
  });
  