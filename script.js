document.addEventListener("DOMContentLoaded", () => {
  // --- ELEMENTS ---
  const themeBtn = document.querySelector("#themeToggle");
  const menuToggle = document.querySelector("#menuToggle");
  const navMenu = document.querySelector("#navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  // --- THEME LOGIC ---
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeBtn.textContent = isDark ? "☀️" : "🌙";
  });

  // --- NAVIGATION LOGIC ---
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.dataset.page;

      // Update active link styling
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Switch pages
      pages.forEach(p => p.classList.remove("active"));
      document.getElementById(target).classList.add("active");

      // Close mobile menu after clicking
      navMenu.classList.remove("open");
    });
  });

  // --- MOBILE MENU TOGGLE ---
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // --- FAQ ACCORDION ---
  // Using a more robust selector to handle clicks anywhere on the question
  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling;
      const isOpen = answer.style.display === "block";
      
      // Close all others first (optional accordion behavior)
      document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
      
      answer.style.display = isOpen ? "none" : "block";
    });
  });

  // --- FORM VALIDATION ---
  const form = document.querySelector("#contactForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    alert(`Thanks for reaching out, ${name}! Your message has been sent.`);
    form.reset();
  });
});
