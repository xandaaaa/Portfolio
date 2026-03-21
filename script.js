const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const locationIcon = document.getElementById("locationIcon");
const githubIcon = document.getElementById("githubIcon");
const linkedinIcon = document.getElementById("linkedinIcon");

// Page navigation
const pageButtons = document.querySelectorAll('.page-btn');
const pages = document.querySelectorAll('.page');

// System color
function getSystemColor() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Initialize theme based on system color (to future me: probably done veryy ineffective)
function initTheme() {
  if (getSystemColor()) {
    document.body.classList.add("dark-mode");
    icon.src = "assets/sun_light.png";
    locationIcon.src = "assets/location_light.png";
    githubIcon.src = "assets/github_light.png";
    linkedinIcon.src = "assets/linkedin_light.png";
  } else {
    document.body.classList.remove("dark-mode");
    icon.src = "assets/moon_dark.png";
    locationIcon.src = "assets/location_dark.png"; 
    githubIcon.src = "assets/github_dark.png"; 
    linkedinIcon.src = "assets/linkedin_dark.png"; 
  }
}

// MAIN FUNC
initTheme();
// Listen for system color changes and update automatically
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (e.matches) {
    document.body.classList.add("dark-mode");
    icon.src = "assets/sun_light.png";
    locationIcon.src = "assets/location_light.png";
    githubIcon.src = "assets/github_light.png";
    linkedinIcon.src = "assets/linkedin_light.png";
  } else {
    document.body.classList.remove("dark-mode");
    icon.src = "assets/moon_dark.png";
    locationIcon.src = "assets/location_dark.png";
    githubIcon.src = "assets/github_dark.png";
    linkedinIcon.src = "assets/linkedin_dark.png";
  }
});

// Toggle logic with button
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.src = "assets/sun_light.png";
    locationIcon.src = "assets/location_light.png";
    githubIcon.src = "assets/github_light.png";
    linkedinIcon.src = "assets/linkedin_light.png";
  } else {
    icon.src = "assets/moon_dark.png";
    locationIcon.src = "assets/location_dark.png";
    githubIcon.src = "assets/github_dark.png";
    linkedinIcon.src = "assets/linkedin_dark.png";
  }
});

pageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetPage = button.getAttribute('data-page');
    
    // Remove active class
    pageButtons.forEach(btn => btn.classList.remove('active'));
    pages.forEach(page => page.classList.remove('active'));
    
    // Add active class to corresponding page
    button.classList.add('active');
    document.querySelector(`.page[data-page="${targetPage}"]`).classList.add('active');
  });
});

// link to corresponding page tab
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetPage = anchor.getAttribute('href').substring(1); 
    const targetButton = document.querySelector(`.page-btn[data-page="${targetPage}"]`);
    if (targetButton) {
      targetButton.click();
    }
  });
});