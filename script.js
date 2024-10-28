function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const navbar = document.getElementById('desktop-nav');

window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

document.querySelector('.experience-link').addEventListener('click', function (e) {
    e.preventDefault(); 

    const target = document.querySelector(this.getAttribute('href')); 
    const offset = 300; 

    window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth' 
    });
});

document.querySelector('.about-link').addEventListener('click', function (e) {
    e.preventDefault(); 

    const target = document.querySelector(this.getAttribute('href')); 
    const offset = 80; 

    window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth' 
    });
});

document.querySelector('.projects-link').addEventListener('click', function (e) {
  e.preventDefault(); 

  const target = document.querySelector(this.getAttribute('href')); 
  const offset = 120; 

  window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth' 
  });
});

document.querySelector('.contact-link').addEventListener('click', function (e) {
  e.preventDefault(); 

  const target = document.querySelector(this.getAttribute('href')); 
  const offset = 120; 

  window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth' 
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('desktop-nav');

  window.onscroll = function() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  };

  const links = document.querySelectorAll('.nav-bottom a');
  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); 

          const targetId = this.getAttribute('href'); 
          const target = document.querySelector(targetId); 
          let offset = 0;

          // Set different offsets based on the link clicked
          switch (targetId) {
              case '#about':
                  offset = 80; // Adjust this value as needed
                  break;
              case '#experience':
                  offset = 300; // Adjust this value as needed
                  break;
              case '#projects':
                  offset = 120; // Adjust this value as needed
                  break;
              case '#contact':
                  offset = 120; // Adjust this value as needed
                  break;
              default:
                  offset = 0; // Default offset
          }

          // Smooth scroll to the target position minus the offset
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - offset,
                  behavior: 'smooth'
              });
          }
      });
  });
});