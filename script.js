document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.querySelector("#themeToggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");
  const menuToggle = document.querySelector("#menuToggle");
  const navMenu = document.querySelector("#navMenu");

  // 1. THEME SWITCHER
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️ Light Roast";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeBtn.textContent = isDark ? "☀️ Light Roast" : "🌙 Dark Roast";
  });

  // 2. PAGE NAVIGATION
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.dataset.page;

      // Update UI
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      pages.forEach(p => p.classList.remove("active"));
      document.getElementById(target).classList.add("active");
      
      // Close mobile menu
      navMenu.classList.remove("open");
    });
  });

  // 3. FAQ ACCORDION
  document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
      const answer = item.querySelector(".faq-answer");
      const isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";
    });
  });

  // 4. MOBILE MENU
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // 5. FORM SUBMISSION
  document.querySelector("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Order/Message received! We'll get the brew ready.");
  });
});
