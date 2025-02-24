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

document.querySelectorAll('.about-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(this, 80);
    });
});

document.querySelectorAll('.experience-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(this, 150);
    });
});

document.querySelectorAll('.projects-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(this, 120);
    });
});

document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(this, 120);
    });
});

function scrollToSection(link, offset) {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome";
    let index = 0;
    const speed = 200; 
    const deleteSpeed = 100; 
    const element = document.getElementById("typingWelcome");

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            setTimeout(deleteText, 2000); 
        }
    }

    function deleteText() {
        let currentText = element.innerHTML;
        if (currentText.length > 0) {
            element.innerHTML = currentText.substring(0, currentText.length - 1);
            setTimeout(deleteText, deleteSpeed);
        } else {
            index = 0; 
            setTimeout(type, 500); 
        }
    }

    type();
});